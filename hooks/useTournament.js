// Context
import { useContext, useEffect } from "react"
import { TournamentContext } from "../contexts/TournamentProvider"

export const useTournament = () => {
  const { tournament, allTournaments, setActiveTournament } =
    useContext(TournamentContext)

  const handleTournamentChange = (id) => {
    setActiveTournament(id)
  }

  return {
    tournament,
    allTournaments,
    handleTournamentChange,
  }
}
