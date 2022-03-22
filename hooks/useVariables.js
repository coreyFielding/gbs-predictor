// Context
import { useContext } from "react"
import { VariableContext } from "../contexts/VariableProvider"

export const useVariables = () => {
  const { variables } = useContext(VariableContext)

  // Map data to formatted object
  // Map through each category and display accordion item for each
  // For each accordion item, map through sub_categories

  const filters = [
    {
      event_form: {
        id,
        title,
        range,
        include,
        variables: [
          {
            id,
            weight,
            title,
            include,
          },
        ],
      },
    },
  ]

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
  const handleVariableChange = ({ Group_Index, Variable_Index }) => {
    // if selected filter contains 'parent' it is a sub category
    // find category from array of categories and set value of parent category or sub category:
    variables.filters[Group_Index].Filter_Group[Variable_Index].value = value
    // mappedFilters.categories[Group_Index].sub_categories[Variable_Index].value =
    value // <-- THIS IS WHEN SETTING SUB_CATEGORY VALUE ONLY
    // if it does not contain 'parent' it is a parent category:
    mappedFilters.categories[Filter_Group_Name].value = value // <-- THIS IS WHEN SETTING THE PARENT VALUE ONLY
  }

  return {
    mappedVariables,
    handleVariableChange,
  }
}
