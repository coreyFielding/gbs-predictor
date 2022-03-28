// Context
import { useContext, useState } from "react"
import { VariableContext } from "../contexts/VariableProvider"

export const useVariable = () => {
  const { groups, setGroups } = useContext(VariableContext)

  const [openVariable, setOpenVariable] = useState(1)

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
    if (item.parentName) {
      const index = groupsClone.findIndex((group) => group.id === item.id)

      groupsClone[index].parentValue = value

      // Parent value overrides child value
      groupsClone[index].childVariables.forEach((variable) => {
        variable.parentValue = value
      })

      setGroups(null)
      setGroups(groupsClone)
      setOpenVariable(item.id)
    }

    // Handle child variable
    if (!item.parentName) {
      const parentIndex = groups.findIndex(
        (group) => group.id === item.parentId
      )

      const childIndex = groups[parentIndex]?.childVariables.findIndex(
        (variable) => variable.id === item.id
      )

      groupsClone[parentIndex].childVariables[childIndex].childValue = value

      setGroups(null)
      setGroups(groupsClone)
      setOpenVariable(item.parentIndex)
    }
  }

  return {
    groups,
    openVariable,
    handleVariableChange,
  }
}
