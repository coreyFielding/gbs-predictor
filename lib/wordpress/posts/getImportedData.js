import axios from "axios"

export const queryAllImportedTournaments = async () => {
  try {
    // Get all imported tournaments
    const tournamentEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tournaments/?populate=*`

    const { data } = await axios
      .get(tournamentEndpoint)
      .catch((err) =>
        console.log(`error fetching content for tournaments: `, err)
      )

    return data.data
  } catch (err) {
    console.log(err)
  }
}
export const queryImportedTournament = async (id = 1) => {
  try {
    // Get imported tournament by ID
    const tournamentEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tournaments/${id}?populate=*`

    const { data } = await axios
      .get(tournamentEndpoint)
      .catch((err) =>
        console.log(`error fetching content for tournaments: `, err)
      )

    return data.data.attributes
  } catch (err) {
    console.log(err)
  }
}

export const queryAllPlayers = async () => {
  try {
    // Get all players and their odds
    const playersEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tournaments/1?populate=*`

    const { data } = await axios
      .get(playersEndpoint)
      .catch((err) => console.log(`error fetching content for players: `, err))

    return data.data.attributes.Player_List
  } catch (err) {
    console.log(err)
  }
}

export const queryAllImportedVariables = async (id = 1) => {
  try {
    // Get all variables associated with tournament ID
    const tournamentEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tournaments/${id}?populate=*`

    const { data } = await axios
      .get(tournamentEndpoint)
      .catch((err) =>
        console.log(`error fetching content for tournaments: `, err)
      )

    return data.data.attributes.Imported_Variables
  } catch (err) {
    console.log(err)
  }
}
