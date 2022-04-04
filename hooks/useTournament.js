// Context
import { useContext } from "react"
import { TournamentContext } from "../contexts/TournamentProvider"

export const useTournament = () => {
  const { tournament, allTournaments, activeTournament, setActiveTournament } =
    useContext(TournamentContext)

  const handleTournamentChange = (id) => {
    setActiveTournament(id)
  }

  return {
    tournament,
    allTournaments,
    activeTournament,
    handleTournamentChange,
  }
}
