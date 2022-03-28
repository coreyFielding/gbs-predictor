import { createContext, useEffect, useState } from "react"
import queryAllGroups from "lib/wordpress/posts/getAllGroups"
import queryAllTournaments from "lib/wordpress/posts/getAllTournaments"
import { queryAllImportedTournaments } from "lib/wordpress/posts/getImportedData"

import { useQuery } from "react-query"

export const TournamentContext = createContext({
  tournaments: undefined,
  groups: undefined,
  setGroups: () => {
    return
  },
})

export const TournamentProvider = ({ children }) => {
  const [activeTournament, setActiveTournament] = useState(1)

  const { data: tournaments, isLoadingTournaments } = useQuery(
    ["tournaments"],
    () => queryAllTournaments()
  )

  const { data: importedTournaments } = useQuery(["importedTournaments"], () =>
    queryAllImportedTournaments()
  )

  const state = {
    tournaments,
    importedTournaments,
  }

  return (
    <TournamentContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </TournamentContext.Provider>
  )
}
