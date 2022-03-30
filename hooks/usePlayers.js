// Context
import { useContext } from "react"
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"

export const usePlayers = () => {
  const { players: playerList, variables } = useContext(PlayerContext)
  const { groups } = useVariable()

  let newPlayerList = []

  // Get the dynamic weights from each variable group
  const variableGroups = groups
    ?.map(({ childVariables }) =>
      childVariables.map((item) => {
        return {
          variable: item.Child_Name,
          weight: item.childWeight,
        }
      })
    )
    .flat()

  const findPlayer = (list, item) => {
    const player = list?.find((player) => player.Player === item.Player)
    return list?.indexOf(player)
  }

  // Set all players initial scores to 0
  playerList?.map(
    (player) => (playerList[playerList.indexOf(player)].score = 0)
  )

  // Assign weights and positions to each player based on variable
  const assignWeightsAndPositions = () => {
    variables?.forEach((variable) => {
      variable.list.map((item) => {
        // Check that player exists in both variable and main player list
        const playerIndex = findPlayer(playerList, item)
        if (playerIndex > -1 && variableGroups) {
          playerList[playerIndex].variables = variableGroups.find(
            (weight) => weight.variable === variable.name
          )

          // Assign variable weight and position values
          playerList[playerIndex].variables = {
            ...playerList[playerIndex].variables,
            position: parseFloat(item.Position),
          }

          // Push player to new array with weights attached
          newPlayerList.push({
            ...playerList[playerIndex],
          })
        } else return
      })
    })
  }

  // Assign score to each player based on variable position and weighting
  const getPlayerScore = () => {
    newPlayerList?.forEach((player) => {
      //Find player across all variables
      const playerFromAllVariables = newPlayerList.filter(
        (item) => item.Player === player.Player
      )

      let scoreTotal = 0
      playerFromAllVariables.forEach((player) => {
        if (player.variables) {
          scoreTotal +=
            (51 - player.variables.position) * player.variables.weight
        }
      })

      const playerIndex = findPlayer(playerList, player)

      playerList[playerIndex].score = scoreTotal
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
