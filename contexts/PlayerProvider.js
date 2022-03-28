import { createContext } from "react"
import { queryAllPlayers } from "lib/wordpress/posts/getImportedData"

import { useQuery } from "react-query"

export const PlayerContext = createContext({
  players: undefined,
})

export const PlayerProvider = ({ children }) => {
  const { data: players, isLoadingPlayers } = useQuery(["players"], () =>
    queryAllPlayers()
  )

  const state = {
    players,
  }

  return (
    <PlayerContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </PlayerContext.Provider>
  )
}
