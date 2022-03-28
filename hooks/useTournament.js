// Context
import { useContext } from "react"
import { TournamentContext } from "../contexts/TournamentProvider"

export const useTournament = () => {
  const { tournaments, setActiveTournament } = useContext(TournamentContext)

  const handleTournamentChange = (id) => {
    setActiveTournament(id)
  }

  return {
    tournaments,
    handleTournamentChange,
  }
}
