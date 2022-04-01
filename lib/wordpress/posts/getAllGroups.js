import axios from "axios"

const queryAllGroups = async () => {
  try {
    // Get all groups associated with tournament ID
    const groupsEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/variable-filters/?populate=*`

    const { data: groupData } = await axios
      .get(groupsEndpoint)
      .catch((err) => console.log(`error fetching content for groups: `, err))

    const groups = Object.keys(groupData.data[0].attributes)
      .map(
        (key) =>
          groupData.data[0].attributes[key] &&
          typeof groupData.data[0].attributes[key] === "object" &&
          key
      )
      .filter((v) => v)

    // Get all Variables for each group
    const variablesEndpoint = `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    }/variable-filters/?populate[0]=${groups.join(
      ","
    )}&populate[1]=${groups.join(".Variables,")}.Variables`

    const { data: variables } = await axios
      .get(variablesEndpoint)
      .catch((err) =>
        console.log(`error fetching content for variables: `, err)
      )

    const childrenVariables = Object.keys(variables.data[0].attributes)
      .map(
        (key) =>
          typeof variables.data[0].attributes[key] === "object" &&
          variables.data[0].attributes[key]
      )
      .filter((v) => v)

    return childrenVariables
  } catch (err) {
    console.error("Failed to get data: ", err)
  }
}

export default queryAllGroups
