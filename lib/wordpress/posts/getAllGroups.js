import axios from "axios"

const queryAllGroups = async (id = 1) => {
  try {
    // Get all groups associated with tournament ID
    const groupsEndpoint = `http://localhost:1337/api/tournament-filters/${id}?populate=*`

    const { data: groupData } = await axios
      .get(groupsEndpoint)
      .catch((err) => console.log(`error fetching content for groups: `, err))

    const groups = Object.keys(groupData.data.attributes)
      .map((key) => typeof groupData.data.attributes[key] === "object" && key)
      .filter((v) => v)

    // Get all Variables for each group
    const variablesEndpoint = `http://localhost:1337/api/tournament-filters/${id}?populate[0]=${groups.join(
      ","
    )}&populate[1]=${groups.join(".Variables,")}`

    const { data: variablesData } = await axios
      .get(variablesEndpoint)
      .catch((err) =>
        console.log(`error fetching content for variables: `, err)
      )

    return variablesData?.data
  } catch (err) {
    console.error("Failed to get data: ", err)
  }
}

export default queryAllGroups
