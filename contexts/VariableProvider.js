import { createContext, useState } from "react"

export const VariableContext = createContext({
  variables: undefined,
  variableValue: 0,
  handleVariableChange: () => {
    return
  },
})

export const VariableProvider = ({ children }) => {
  const [variableValue, setVariableValue] = useState(0)

  const variables = {
    tournament: {
      stats: [{ stat: "lastTournament", description: "" }],
    },
  }
  const state = {
    variables,
    variableValue,
    handleVariableChange,
  }

  return (
    <VariableContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </VariableContext.Provider>
  )
}
