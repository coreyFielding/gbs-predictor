import { createContext, useEffect, useState } from "react"
import queryAllGroups from "lib/wordpress/posts/getAllGroups"
import queryAllTournaments from "lib/wordpress/posts/getAllTournaments"
import { useQuery } from "react-query"

export const TournamentContext = createContext({
  tournaments: undefined,
  groups: undefined,
})

export const TournamentProvider = ({ children }) => {
  const [activeTournament, setActiveTournament] = useState(1)

  const { data: tournaments, isLoadingTournaments } = useQuery(
    ["tournaments"],
    () => queryAllTournaments()
  )

  const { data: groups, isLoadingGroups } = useQuery(
    ["groups", activeTournament],
    () => queryAllGroups(activeTournament)
  )

  const state = {
    tournaments,
    groups,
    setActiveTournament,
  }

  return (
    <TournamentContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </TournamentContext.Provider>
  )
}
