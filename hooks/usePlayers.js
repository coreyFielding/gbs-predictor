// Context
import { useContext } from "react"
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"

export const usePlayers = () => {
  const { players: playerList, variables } = useContext(PlayerContext)
  const { groups } = useVariable()

  let scoredPlayers = []

  // Get the dynamic weights from each variable group
  const weights = groups
    ?.map(({ childVariables }) =>
      childVariables.map(({ childWeight }) => childWeight)
    )
    .flat()

  // Assign score to each player based on their variable position and weighting
  variables?.map(({ Variable }, index) => {
    Variable.data.map((player) => {
      if (weights && weights[index]) {
        const pos = (player.Position = Number(player.Position))
        const playerScore = (51 - pos) * weights[index]

        player.score = playerScore
        scoredPlayers.push(player ? player : null)
      }
    })
  })

  console.log(scoredPlayers)

  const sortedByScore = scoredPlayers.sort((a, b) =>
    a.score < b.score ? 1 : -1
  )

  // if (sortedByScore[0]) sortedByScore[0].rank = 1
  // for (let i = 1; i < scoredPlayers.length; i++) {
  //   // Sort players with same score alphabetically
  //   if (sortedByScore[i].score === sortedByScore[i - 1].score) {
  //     const sortByName = sortedByScore.splice(
  //       sortedByScore[i - 1],
  //       sortedByScore[i] - sortedByScore[i - 1] + 1
  //     )

  //     sortByName
  //       .sort((a, b) =>
  //         a.Player.split(" ")[0].localeCompare(b.Player.split(" ")[0])
  //       )
  //       .reverse()

  //     sortedByScore.splice(sortedByScore[i], 0, ...sortByName)
  //   }
  // }

  return {
    playerList,
    sortedByScore,
  }
}
