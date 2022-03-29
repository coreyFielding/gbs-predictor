// Context
import { useContext } from "react"
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"

export const usePlayers = () => {
  const { players: playerList, variables } = useContext(PlayerContext)
  const { groups } = useVariable()

  let newPlayerList = []

  // Get the dynamic weights from each variable group
  const weights = groups
    ?.map(({ childVariables }) =>
      childVariables.map((item) => {
        return {
          variable: item.Child_Name,
          weight: item.childWeight,
        }
      })
    )
    .flat()

  // Assign weights and positions to each player based on variable

  const assignWeightsAndPositions = () => {
    variables?.forEach(({ Variable }, variableIndex) => {
      Variable.data.map((item, index) => {
        playerList[index].weights = weights ? [...weights] : []

        console.log(item.Position) // This gives a position of 38 for David

        // Add player position for each variable type
        playerList[index].weights[variableIndex] = {
          ...playerList[index].weights[variableIndex],
          position: Number(item.Position), // <-- Here is where the position becomes incorrect
        }

        // Push player with weights and positions to new player list
        newPlayerList.push({
          ...playerList[index],
          weights: [playerList[index].weights[variableIndex]],
        })
      })
    })
  }

  // Assign score to each player based on variable position and weighting

  const getPlayerScore = () => {
    newPlayerList?.forEach((player) => {
      let scoreTotal = 0

      // Find player across all variables
      const playerFromAllVariables = newPlayerList.filter(
        (item) => item.Player === player.Player
      )

      playerFromAllVariables.forEach((item) => {
        if (item.weights.length) {
          item.weights?.forEach(({ position, weight }) => {
            scoreTotal += (51 - position) * weight
          })
        }
      })

      // Add score property to each player in original player list
      const foundPlayer = playerList.find(
        (item) => item.Player === player.Player
      )

      playerList[playerList.indexOf(foundPlayer)].score = scoreTotal
    })
  }

  assignWeightsAndPositions()
  getPlayerScore()

  const sortedPlayerList = playerList?.sort((a, b) =>
    a.score < b.score ? 1 : -1
  )

  return {
    sortedPlayerList,
  }
}
