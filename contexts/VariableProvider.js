import { createContext, useContext, useEffect, useState } from "react"
import queryAllGroups from "lib/wordpress/posts/getAllGroups"
import { queryAllImportedPlayersAndVariables } from "lib/wordpress/posts/getImportedData"
import { TournamentContext } from "./TournamentProvider"

import { useQuery } from "react-query"

export const VariableContext = createContext({
  groups: undefined,
  setGroups: () => {
    return
  },
})

export const VariableProvider = ({ id, children }) => {
  const [groups, setGroups] = useState(null)

  const { activeTournament } = useContext(TournamentContext)

  const { data: variableGroups, refetch } = useQuery(["groups"], () =>
    queryAllGroups()
  )

  const { data: importedData } = useQuery(
    ["importedData", activeTournament],
    () => queryAllImportedPlayersAndVariables(activeTournament)
  )

  const { playerList, importedVariables } = importedData ? importedData : {}

  useEffect(() => refetch(), [activeTournament])

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

  const variables = importedVariables?.map((variable, index) => {
    return {
      name: importedVariableKeys[index].split("_").join(" "),
      list: variable.Variable.data,
    }
  })

  let filteredGroups = []

  // Filter groups based on imported variables
  formattedGroups?.forEach((parent) => {
    const children = parent.childVariables

    importedVariableKeys?.forEach((key) => {
      if (
        children?.find(
          (child) => child?.Child_Name === key.split("_").join(" ").toString()
        )
      ) {
        !filteredGroups.includes(parent) && filteredGroups.push(parent)
      }
    })
  })

  // Remove children from parent that are not an imported variable
  filteredGroups?.forEach((group) => {
    const filteredChildren = group.childVariables.filter((child) =>
      importedVariableKeys.some(
        (key) => key.split("_").join(" ") === child.Child_Name
      )
    )

    group.childVariables = [...filteredChildren]
  })

  // Remove children from parent that do not have any players in variable list in master list
  const removeUnusedVariables = () => {
    let variablesToRemove = []
    const masterList = playerList?.data

    variables?.forEach((variable) => {
      let existingPlayers = []

      variable.list.map((item) => {
        const foundPlayer = masterList?.find(
          (player) => player.Player === item.Player
        )
        const playerIndex = masterList.indexOf(foundPlayer)
        existingPlayers.push(playerIndex)
      })

      // If no players in variable list belong to main list remove variable from group
      if (existingPlayers.every((v) => v === -1)) {
        variablesToRemove =
          filteredGroups &&
          filteredGroups
            .map((group) =>
              group.childVariables?.filter(
                (child) => child.Child_Name === variable.name
              )
            )
            .flat()

        variablesToRemove.forEach((variable) => {
          filteredGroups.forEach((group) => {
            group.childVariables = group.childVariables.filter(
              (child) => child.id !== variable.id
            )
          })
        })
      }
    })
  }

  useEffect(() => {
    if (!importedData) return
    removeUnusedVariables()
    setGroups(filteredGroups)
  }, [importedVariables, variableGroups, activeTournament])

  const state = {
    variables,
    importedVariableKeys,
    groups,
    setGroups,
  }

  return (
    <VariableContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </VariableContext.Provider>
  )
}
