// Context
import { useContext, useState } from "react"
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"
import { VariableContext } from "contexts/VariableProvider"

export const usePlayers = () => {
  const { players: playerList } = useContext(PlayerContext)
  const { variables } = useContext(VariableContext)
  const { groups } = useVariable()

  const [selectedBookmaker, setSelectedBookmaker] = useState("Bet365")
  const [sortedPlayerList, setSortedPlayerList] = useState()
  let bookmakers = []
  let newPlayerList = []

  const bookmakersFromPlayer =
    playerList?.length && Object.assign({}, playerList[0])

  bookmakersFromPlayer &&
    ["Player", "row_id", "score", "variables", "odds", "DraftKings"].forEach(
      (k) => delete bookmakersFromPlayer[k]
    )

  // Get available bookmakers
  bookmakers = bookmakersFromPlayer
    ? [...Object.keys(bookmakersFromPlayer)]
    : []

  const filterPlayersByBookmaker = (bookmaker) => {
    setSelectedBookmaker(bookmaker)
  }

  // Get the dynamic weights from each variable group
  const variableGroups =
    groups &&
    groups
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

  if (playerList?.length) {
    // Set all players initial scores to 0
    playerList?.map(
      (player) => (playerList[findPlayer(playerList, player)].score = 0)
    )

    // Assign weights and positions to each player based on variable
    const assignWeightsAndPositions = () => {
      variables?.forEach((variable) => {
        variable.list?.map((item) => {
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

    // Assign odds to each player based on selected bookmaker
    const getPlayerOdds = () => {
      newPlayerList?.forEach((player) => {
        const playerBookmaker = Object.keys(player).find(
          (k) => k === selectedBookmaker
        )

        const playerIndex = findPlayer(playerList, player)
        const odds = player[playerBookmaker]
        playerList[playerIndex].odds = odds
      })
    }

    const sorted = (arr, key) => {
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i][key] === "string") {
          return arr[i + 1][key].split(" ")[0] > arr[i][key].split(" ")[0]
            ? false
            : true
        }
        if (typeof arr[i][key] === "number") {
          return arr[i + 1][key] - arr[i][key] < 0 ? false : true
        }
      }
    }

    const sortPlayersByColumn = (column) => {
      switch (column) {
        case "Score":
          const isScoreSorted = sorted(playerList, "score")
          setSortedPlayerList(
            playerList
              ?.sort((a, b) =>
                isScoreSorted
                  ? a[column.toLowerCase()] < b[column.toLowerCase()]
                    ? 1
                    : -1
                  : a[column.toLowerCase()] > b[column.toLowerCase()]
                  ? 1
                  : -1
              )
              .filter((player) => player)
          )
          break
        case "Player":
          const isPlayerSorted = sorted(playerList, "Player")
          setSortedPlayerList(
            playerList
              ?.sort((a, b) =>
                isPlayerSorted
                  ? a[column].split(" ")[0] > b[column].split(" ")[0]
                    ? 1
                    : -1
                  : a[column].split(" ")[0] < b[column].split(" ")[0]
                  ? 1
                  : -1
              )
              .filter((player) => player)
          )
          break
        default:
          console.log("default")
      }
    }

    assignWeightsAndPositions()
    getPlayerOdds()
    getPlayerScore()

    return {
      playerList,
      sortedPlayerList,
      bookmakers,
      selectedBookmaker,
      sortPlayersByColumn,
      filterPlayersByBookmaker,
    }
  } else {
    return []
  }
}
