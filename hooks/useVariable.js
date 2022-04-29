// Context
import { useContext, useEffect, useState } from "react"
import { VariableContext } from "../contexts/VariableProvider"
import { useTournament } from "./useTournament"

export const useVariable = () => {
  const [localVariableState, setLocalVariableState] = useState()

  const { groups, setGroups } = useContext(VariableContext)
  const { allTournaments, activeTournament } = useTournament()

  // const setVariablesForActiveTournament = (id) => {
  //   // Initialise local storage
  //   localStorage.setItem(
  //     "variables",
  //     JSON.stringify(
  //       allTournaments &&
  //         allTournaments.map((tournament) => {
  //           return {
  //             id: tournament.id,
  //             variables: [],
  //           }
  //         })
  //     )
  //   )

  //   const active = JSON.parse(localStorage.getItem("variables"))?.filter(
  //     (item) => item.id === id
  //   )

  //   const variables = active?.variables?.length
  //     ? active?.variables
  //     : groupsClone

  //   setLocalVariableState(variables)

  //   let updatedArr = variables?.filter((item) => item.id !== id)
  //   // updatedArr = [...updatedArr, variables]

  //   localStorage.setItem("variables", JSON.stringify(updatedArr))
  // }

  // Retrieve list of categories from variable context.
  // Render an ACCORDION ITEM for each variable group (category).
  // Each variable group (category) will render a TABLE that will include a SLIDER for each variable (sub-category) within that group.
  // Setting a value on the slider will set the value for that sub category in that group

  const groupsClone = groups

  const setActiveVariable = (index) => {
    groupsClone.map((group) => (group.active = false))
    groupsClone[index].active = true
  }

  /**
   *
   * @param {object} item Selected variable data
   * @param {number} Value Value of slider
   * @returns {void}
   */
  const handleVariableChange = (item, value) => {
    // Handle parent variable
    if (item.parentName) {
      const index = groupsClone.findIndex((group) => group.id === item.id)
      groupsClone[index].parentWeight = value

      // Parent value overrides child value
      groupsClone[index].childVariables.forEach((variable) => {
        variable.childWeight = groupsClone[index].parentWeight
      })

      setGroups(null)
      setGroups(groupsClone)
      setActiveVariable(index)
    }

    // Handle child variable
    if (!item.parentName) {
      const parentIndex = groups.findIndex(
        (group) => group.id === item.parentId
      )

      const childIndex = groups[parentIndex]?.childVariables.findIndex(
        (variable) => variable.id === item.id
      )

      if (groupsClone[parentIndex]) {
        groupsClone[parentIndex].childVariables[childIndex].childWeight = value
      }

      setGroups(groupsClone)
      setActiveVariable(parentIndex)
    }
  }

  // Persist variable state when switching tournament (DOES NOT WORK)
  // useEffect(() => {
  //   activeTournament && setVariablesForActiveTournament(activeTournament)
  // }, [groups])

  // useEffect(() => {
  //   // setGroups(localVariableState)
  // }, [localVariableState])

  const groupNames = groups?.map(({ parentName }) => {
    return {
      parentName,
    }
  })

  return {
    groups,
    setGroups,
    groupNames,
    handleVariableChange,
  }
}
