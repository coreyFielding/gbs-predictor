import { useContext, useEffect, useState } from "react"

// Context
import { PlayerContext } from "contexts/PlayerProvider"
import { useVariable } from "./useVariable"
import { VariableContext } from "contexts/VariableProvider"

// Helpers
import { sortBy } from "functions/sorted"

export const usePlayers = () => {
  const { players: playerList, isLoadingPlayers } = useContext(PlayerContext)
  const { variables } = useContext(VariableContext)
  const { groups } = useVariable()

  const [selectedBookmaker, setSelectedBookmaker] = useState("Bet365")
  const [sortedPlayerList, setSortedPlayerList] = useState()
  const [sortOrder, setSortOrder] = useState({ key: "score", order: "desc" })
  const [isLoading, setIsLoading] = useState(true)

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

  const filterPlayersByBookmaker = (bookmaker) =>
    setSelectedBookmaker(bookmaker)

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
      playerList[playerIndex].odds = player[playerBookmaker].includes("/")
        ? odds
        : player[playerBookmaker] === "TBC"
        ? "TBC"
        : parseFloat(odds)
    })
  }

  const sortPlayers = (key) => {
    setSortOrder({
      key: key === "odds" ? "draftkings" : key.toLowerCase(),
      order: sortOrder.order === "asc" ? "desc" : "asc",
    })

    setSortedPlayerList(
      playerList?.sort((a, b) =>
        sortBy(key, sortOrder.order === "asc" ? "desc" : "asc", a, b)
      )
    )
  }

  const sortPlayersByColumn = (column) => {
    switch (column) {
      case "Score":
        sortPlayers("score")
        break
      case "Player":
        sortPlayers("Player")
        break
      case "DraftKings":
        sortPlayers("odds")
      default:
        return
    }
  }

  assignWeightsAndPositions()
  getPlayerOdds()
  getPlayerScore()

  useEffect(() => {
    sortedPlayerList?.length && setIsLoading(false)
  }, [sortedPlayerList])

  // Sort players by score on initial render
  useEffect(() => {
    setSortedPlayerList(
      playerList?.sort((a, b) => sortBy(sortOrder.key, sortOrder.order, a, b))
    )
  }, [getPlayerScore])

  // Maintain sort state during variable change
  useEffect(() => {
    setSortedPlayerList(
      playerList?.sort((a, b) => sortBy(sortOrder.key, sortOrder.order, a, b))
    )
  }, [groups])

  return {
    playerList,
    sortedPlayerList,
    bookmakers,
    selectedBookmaker,
    sortOrder,
    isLoading,
    sortPlayersByColumn,
    filterPlayersByBookmaker,
  }
}
