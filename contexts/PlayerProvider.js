import { createContext, useContext, useEffect, useState } from "react"
import { queryAllPlayers } from "lib/wordpress/posts/getImportedData"
import { VariableContext } from "./VariableProvider"
import { useQuery } from "react-query"

export const PlayerContext = createContext({
  players: undefined,
})

export const PlayerProvider = ({ children }) => {
  const { importedVariables } = useContext(VariableContext)
  const [players, setPlayers] = useState([])

  const { data, isLoadingPlayers } = useQuery(["players"], () =>
    queryAllPlayers()
  )

  useEffect(() => setPlayers(data?.data), [data])

  // calculate player rankings based on imported variables

  const state = {
    players,
    variables: importedVariables,
  }

  return (
    <PlayerContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </PlayerContext.Provider>
  )
}
