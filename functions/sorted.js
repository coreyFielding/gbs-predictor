export const sortBy = (column, currentOrder, a, b) => {
  // Condition to sort in ascending order
  const ascCondition =
    typeof a[column] === "string"
      ? a[column].split(" ")[0] < b[column].split(" ")[0]
      : a[column] < b[column]

  // Condition to sort in descending order
  const descCondition =
    typeof a[column] === "string"
      ? a[column].split(" ")[0] > b[column].split(" ")[0]
      : a[column] > b[column]

  if (currentOrder === "asc") {
    return descCondition ? 1 : -1
  } else if (currentOrder === "desc") {
    return ascCondition ? 1 : -1
  } else {
    return ascCondition ? 1 : -1
  }
}
