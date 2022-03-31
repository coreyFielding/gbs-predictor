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
  const [activeTournament, setActiveTournament] = useState(1)

  // Get all tournaments
  const { data: allTournaments } = useQuery(["importedTournaments"], () =>
    queryAllImportedTournaments()
  )

  console.log(allTournaments)

  // Get tournament based on ID
  const { data: tournament } = useQuery(
    ["importedTournament", activeTournament],
    () => queryImportedTournament(activeTournament)
  )

  console.log("change", activeTournament, tournament)

  const state = {
    allTournaments,
    tournament,
    setActiveTournament,
  }

  return (
    <TournamentContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </TournamentContext.Provider>
  )
}
