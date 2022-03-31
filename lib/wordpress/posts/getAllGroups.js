import axios from "axios"

const queryAllGroups = async (id = 1) => {
  try {
    // Get all groups associated with tournament ID
    const groupsEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/variable-filters/${id}?populate=*`

    const { data: groupData } = await axios
      .get(groupsEndpoint)
      .catch((err) => console.log(`error fetching content for groups: `, err))

    const groups = Object.keys(groupData.data.attributes)
      .map(
        (key) =>
          groupData.data.attributes[key] &&
          typeof groupData.data.attributes[key] === "object" &&
          key
      )
      .filter((v) => v)

    // Get all Variables for each group
    const variablesEndpoint = `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    }/variable-filters/1?populate[0]=${groups.join(
      ","
    )}&populate[1]=${groups.join(".Variables,")}.Variables`

    const { data: variables } = await axios
      .get(variablesEndpoint)
      .catch((err) =>
        console.log(`error fetching content for variables: `, err)
      )

    const childrenVariables = Object.keys(variables.data.attributes)
      .map(
        (key) =>
          typeof variables.data.attributes[key] === "object" &&
          variables.data.attributes[key]
      )
      .filter((v) => v)

    return childrenVariables
  } catch (err) {
    console.error("Failed to get data: ", err)
  }
}

export default queryAllGroups
