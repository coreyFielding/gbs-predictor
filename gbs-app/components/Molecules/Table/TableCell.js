export const TableData = ({ children, styles: userStyles }) => (
  <td>{children}</td>
)
export const TableTextCell = ({ text }) => {
  return <TableData>{text}</TableData>
}

const CellComponent = ({ children }) => {
  return <TableData>{children}</TableData>
}

CellComponent.Text = TableTextCell

export const TableCell = CellComponent
