// Context
import { useContext } from "react"
import { PlayerContext } from "contexts/PlayerProvider"

export const usePlayers = () => {
  const { players: playerList, variables } = useContext(PlayerContext)

  let scoredPlayers = []
  let filteredPlayers = []

  // loop through variable player list
  variables?.map(({ Variable }) => {
    const data = Variable.data
    data.map((item) => {
      // check that player exists in master player list
      const playerMatch = playerList.find(
        (player) => player.Player === item.Player
      )

      scoredPlayers.push(playerMatch ? item : null)
    })
  })

  // Assign score to each player based on their variable position and weighting
  scoredPlayers.map((player, index) => {
    const pos = (player.Position = Number(player.Position))
    const playerScore = (51 - pos) * 10
    player.score = playerScore
    filteredPlayers.push(player)
  })

  const sortedByScore = scoredPlayers.sort((a, b) =>
    a.score < b.score ? 1 : -1
  )

  sortedByScore.forEach((player, i, arr) => {
    player.rank =
      i === 0 || player.score != arr[i - 1].score ? i + 1 : arr[i - 1].rank
  })

  //     // Sort players with same rank alphabetically
  //     // scoredPlayers
  //     //   .sort((a, b) =>
  //     //     a.Player.split(" ")[0].localeCompare(b.Player.split(" ")[0])
  //     //   )
  //     //   .reverse()

  console.log(sortedByScore)
  return {
    playerList,
    sortedByScore,
  }
}
