import { createContext, useContext, useEffect, useState } from "react"
import { queryAllImportedPlayersAndVariables } from "lib/wordpress/posts/getImportedData"
import { useQuery } from "react-query"

export const PlayerContext = createContext({
  players: undefined,
})

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([])

  const { data, isLoadingPlayers } = useQuery(["players"], () =>
    queryAllImportedPlayersAndVariables(1)
  )

  const { playerList } = data ? data : {}

  useEffect(() => playerList && setPlayers(playerList.data), [data])

  const state = {
    players,
  }

  return (
    <PlayerContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </PlayerContext.Provider>
  )
}
