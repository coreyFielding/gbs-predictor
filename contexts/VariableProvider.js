import { createContext, useEffect, useState } from "react"
import queryAllGroups from "lib/wordpress/posts/getAllGroups"
import { queryAllImportedVariables } from "lib/wordpress/posts/getImportedData"

import { useQuery } from "react-query"

export const VariableContext = createContext({
  groups: undefined,
  setGroups: () => {
    return
  },
})

export const VariableProvider = ({ children }) => {
  const activeTournament = 1 // this will come from tournament provider
  const [groups, setGroups] = useState(null)

  const { data: variableGroups, isLoadingGroups } = useQuery(
    ["groups", activeTournament],
    () => queryAllGroups(activeTournament)
  )

  const { data: importedVariables } = useQuery(["importedVariables"], () =>
    queryAllImportedVariables()
  )

  // Get the names of the imported variables that refer to the active variables of a tournament

  const importedVariableKeys =
    importedVariables &&
    importedVariables
      .map(({ Variable }) =>
        Object.keys(Variable.data[0]).filter(
          (key) => Variable.data[0][key] === ""
        )
      )
      .flat()

  const formattedGroups =
    variableGroups &&
    Object.keys(variableGroups)
      .map((key, index) => {
        const parent = variableGroups[key]

        const childVariables = parent?.Variables?.map(({ id, Child_Name }) => {
          return {
            id,
            Child_Name,
            childWeight: parent?.Parent_Weight,
            childRange: parent?.Parent_Range,
            parentId: index + 1,
          }
        })

        return {
          id: index + 1,
          parentName: parent?.Parent_Name,
          parentRange: parent?.Parent_Range,
          parentWeight: parent?.Parent_Weight,
          childVariables,
        }
      })
      .filter((v) => v.parentName)

  let filteredGroups = []

  // Filter groups based on imported variables
  formattedGroups?.forEach((parent) => {
    const children = parent.childVariables

    importedVariableKeys?.forEach((key) => {
      if (children?.find((child) => child?.Child_Name === key.toString())) {
        !filteredGroups.includes(parent) && filteredGroups.push(parent)
      }
    })
  })

  // Remove children from parent that are not an imported variable
  filteredGroups?.forEach((group) => {
    const filteredChildren = group.childVariables.filter((child) =>
      importedVariableKeys.some((key) => key === child.Child_Name)
    )

    group.childVariables = [...filteredChildren]
  })

  useEffect(() => {
    setGroups(filteredGroups)
  }, [variableGroups])

  const state = {
    importedVariables,
    groups,
    setGroups,
  }

  return (
    <VariableContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </VariableContext.Provider>
  )
}
