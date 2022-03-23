// Context
import { useContext } from "react"
import { TournamentContext } from "../contexts/TournamentProvider"

export const useTournament = () => {
  const { tournaments, setActiveTournament, groups, setGroups } =
    useContext(TournamentContext)

  const handleTournamentChange = (id) => {
    setActiveTournament(id)
  }

  // Retrieve list of categories from variable context.
  // Render an ACCORDION ITEM for each variable group (category).
  // Each variable group (category) will render a TABLE that will include a SLIDER for each variable (sub-category) within that group.
  // Setting a value on the slider will set the value for that sub category in that group

  const groupsClone = groups

  /**
   *
   * @param {object} item Selected variable data
   * @param {number} Value Value of slider
   * @returns {void}
   */
  const handleVariableChange = (item, value) => {
    // Handle parent variable
    if (item.groupName) {
      const index = groupsClone.findIndex((group) => group.id === item.id)

      groupsClone[index].parentValue = value

      // Parent value overrides child value
      groupsClone[index].variables.forEach((variable) => {
        variable.parentValue = value
      })
      setGroups(null)
      setGroups(groupsClone)
    }

    // Handle child variable
    if (!item.groupName) {
      const parentIndex = groups.findIndex(
        (group) => group.id === item.parentId
      )

      const childIndex = groups[parentIndex]?.variables.findIndex(
        (variable) => variable.id === item.id
      )

      groupsClone[parentIndex].variables[childIndex].childValue = value
      setGroups(null)
      setGroups(groupsClone)
    }
  }

  return {
    tournaments,
    groups,
    handleTournamentChange,
    handleVariableChange,
  }
}
