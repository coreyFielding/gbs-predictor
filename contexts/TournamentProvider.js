import { createContext, useState } from "react"
import {
  queryImportedTournament,
  queryAllImportedTournaments,
} from "lib/wordpress/posts/getImportedData"

import { useQuery } from "react-query"

export const TournamentContext = createContext({
  tournament: undefined,
  allTournaments: undefined,
})

export const TournamentProvider = ({ children }) => {
  const [activeTournament, setActiveTournament] = useState()

  // Get all tournaments
  const { data: allTournaments, isLoading: isLoadingTournaments } = useQuery(
    ["importedTournaments"],
    () => queryAllImportedTournaments()
  )

  // Get tournament based on ID
  const { data: tournament } = useQuery(
    ["importedTournament", activeTournament],
    () => queryImportedTournament(activeTournament)
  )

  const state = {
    allTournaments,
    tournament,
    activeTournament,
    isLoadingTournaments,
    setActiveTournament,
  }

  return (
    <TournamentContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </TournamentContext.Provider>
  )
}
