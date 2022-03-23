// Context
import { useContext } from "react"
import { TournamentContext } from "../contexts/TournamentProvider"

export const useTournament = () => {
  const { groups, tournaments, setActiveTournament } =
    useContext(TournamentContext)

  // Map data to formatted object
  // Map through each category and display accordion item for each
  // For each accordion item, map through sub_categories

  const filters =
    groups?.attributes &&
    Object.keys(groups.attributes)
      .map((key) => {
        const data = groups.attributes[key][0]

        return {
          id: data?.id,
          groupName: data?.Filter_Group_Name,
          groupRange: data?.Group_Range,
          variables: data?.Variables?.map((variable) => {
            return {
              id: variable.id,
              include: variable.Variable_Include,
              variableName: variable.Variable_Name,
              variableRange: variable.Variable_Range,
              variableWeight: variable.Variable_Weight,
            }
          }),
        }
      })
      .filter((v) => v.id)

  const handleTournamentChange = (id) => {
    // set activeTournament
    setActiveTournament(id)
  }

  // Retrieve list of categories from variable context.
  // Render an ACCORDION ITEM for each variable group (category).
  // Each variable group (category) will render a TABLE that will include a SLIDER for each variable (sub-category) within that group.
  // Setting a value on the slider will set the value for that sub category in that group

  /**
   *
   * @param {number} Group_Index Index of parent category
   * @param {number} Variable_Index Index of sub-category within parent
   * @returns {void}
   */
  const handleVariableChange = (item) => {
    // // if selected filter contains 'groupName' it is a parent
    // // find category from array of categories and set value of parent category or sub category:
    // // if (item.groupName) {
    // //   groups[]
    // // }
    // variables.filters[Group_Index].Filter_Group[Variable_Index].value = value
    // // mappedFilters.categories[Group_Index].sub_categories[Variable_Index].value =
    // value // <-- THIS IS WHEN SETTING SUB_CATEGORY VALUE ONLY
    // // if it does not contain 'parent' it is a parent category:
    // mappedFilters.categories[Filter_Group_Name].value = value // <-- THIS IS WHEN SETTING THE PARENT VALUE ONLY
  }

  return {
    tournaments,
    filters,
    handleTournamentChange,
    handleVariableChange,
  }
}
