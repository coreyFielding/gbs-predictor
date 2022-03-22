import axios from "axios"

const queryAllTournaments = async (id = 1) => {
  try {
    // Get all tournaments
    const tournamentsEndpoint = `http://localhost:1337/api/tournaments?populate=*`

    const { data: tournamentData } = await axios
      .get(tournamentsEndpoint)
      .catch((err) => console.log(`error fetching content for groups: `, err))

    return tournamentData.data
  } catch (err) {
    console.error("Failed to get data: ", err)
  }
}

export default queryAllTournaments
