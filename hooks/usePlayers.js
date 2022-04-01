// Context
import { useContext, useState } from "react"
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"
import { VariableContext } from "contexts/VariableProvider"

export const usePlayers = () => {
  const { players: playerList } = useContext(PlayerContext)
  const { variables } = useContext(VariableContext)
  const { groups } = useVariable()

  const [bookmaker, setBookmaker] = useState("All")

  let bookmakers = []
  let newPlayerList = []
  let sortedPlayerList = []

  // Get available bookmakers
  const getBookmakerFromObj = playerList
    .map((player) => {
      return Object.keys(player)
        .map((key) => {
          return key === "Bookmaker" ? player[key] : null
        })
        .filter((v) => v)
    })
    .flat()

  bookmakers = ["All", ...new Set(getBookmakerFromObj)]

  const filterPlayersByBookmaker = (bookmaker) => {
    setBookmaker(bookmaker)
    // const filteredByBookmaker =
    //   bookmaker === "All"
    //     ? playerList
    //     : playerList?.filter((player) => player.Bookmaker === bookmaker)

    // playerListClone = filteredByBookmaker
  }

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

  if (playerList.length) {
    // Set all players initial scores to 0
    playerList?.map(
      (player) => (playerList[findPlayer(playerList, player)].score = 0)
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
        let scoreTotal = 0

        //Find player across all variables
        const playerFromAllVariables = newPlayerList.filter(
          (item) => item.Player === player.Player
        )

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

    sortedPlayerList = playerList
      ?.sort((a, b) => (a.score < b.score ? 1 : -1))
      .filter((player) =>
        bookmaker === "All" ? player : player.Bookmaker === bookmaker
      )

    console.log(sortedPlayerList)

    return {
      sortedPlayerList,
      bookmakers,
      filterPlayersByBookmaker,
    }
  } else {
    return []
  }
}
