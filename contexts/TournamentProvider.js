import { createContext, useEffect, useState } from "react"
import queryAllGroups from "lib/wordpress/posts/getAllGroups"
import queryAllTournaments from "lib/wordpress/posts/getAllTournaments"
import { useQuery } from "react-query"

export const TournamentContext = createContext({
  tournaments: undefined,
  groups: undefined,
  setGroups: () => {
    return
  },
})

export const TournamentProvider = ({ children }) => {
  const [activeTournament, setActiveTournament] = useState(1)
  const [groups, setGroups] = useState(null)

  const { data: tournaments, isLoadingTournaments } = useQuery(
    ["tournaments"],
    () => queryAllTournaments()
  )

  const { data: variableGroups, isLoadingGroups } = useQuery(
    ["groups", activeTournament],
    () => queryAllGroups(activeTournament)
  )

  const formattedGroups =
    variableGroups &&
    Object.keys(variableGroups?.attributes)
      .slice(2)
      .map((key, index) => {
        const data = variableGroups?.attributes[key][0]

        return {
          id: index,
          groupName: data?.Filter_Group_Name,
          groupRange: data?.Group_Range,
          variables: data?.Variables?.map((variable) => {
            return {
              id: variable.id,
              include: variable.Variable_Include,
              variableName: variable.Variable_Name,
              variableWeight: variable.Variable_Weight,
              range: data?.Group_Range,
              parentId: index,
            }
          }),
        }
      })
      .filter((v) => v.groupName)

  useEffect(() => {
    setGroups(formattedGroups)
  }, [variableGroups])

  const state = {
    tournaments,
    groups,
    setGroups,
    setActiveTournament,
  }

  return (
    <TournamentContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </TournamentContext.Provider>
  )
}
