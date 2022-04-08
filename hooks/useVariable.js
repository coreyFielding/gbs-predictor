// Context
import { TournamentContext } from "contexts/TournamentProvider"
import { useContext, useEffect, useState } from "react"
import { VariableContext } from "../contexts/VariableProvider"

export const useVariable = () => {
  const { groups, setGroups } = useContext(VariableContext)
  const { activeTournament } = useContext(TournamentContext)

  // Retrieve list of categories from variable context.
  // Render an ACCORDION ITEM for each variable group (category).
  // Each variable group (category) will render a TABLE that will include a SLIDER for each variable (sub-category) within that group.
  // Setting a value on the slider will set the value for that sub category in that group

  const groupsClone = groups

  // Used for saving variable state when switching between tournaments
  // const VARIABLE_CACHE = "VARIABLE_CACHE"

  // const cacheVariableState = () => {
  //   try {
  //     localStorage.setItem(VARIABLE_CACHE, groupsClone)

  //     return localStorage.getItem(VARIABLE_CACHE)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // const setActiveVariable = (index) => {
  //   groupsClone.map((group) => (group.active = false))
  //   groupsClone[index].active = true
  // }

  // useEffect(() => {
  //   cacheVariableState()
  // }, [activeTournament])

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

      setGroups(null)
      setGroups(groupsClone)
      setActiveVariable(parentIndex)
    }
  }

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
