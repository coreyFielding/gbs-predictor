// Components
import { ToggleFilter } from "../.."
import Image from "next/image"

// Styles
import cn from "classnames"
import styles from "./table.module.scss"

const classes = (defaultStyles, userStyles) => cn(defaultStyles, userStyles)

export const TableData = ({ children, styles: userStyles, ...props }) => (
  <td className={classes(styles.tableData, userStyles)} {...props}>
    {children}
  </td>
)
export const TableTextCell = ({ children, cellProps }) => {
  return <TableData {...cellProps}>{children}</TableData>
}

export const TableImageCell = ({ cellProps, ...props }) => (
  <TableData {...cellProps}>
    <Image {...props} />
  </TableData>
)

export const TableToggleCell = ({ cellProps, ...props }) => (
  <TableData {...cellProps}>
    <ToggleFilter {...props} />
  </TableData>
)

const CellComponent = ({ children, ...props }) => {
  return <TableData {...props}>{children}</TableData>
}

CellComponent.Text = TableTextCell
CellComponent.Image = TableImageCell
CellComponent.Toggle = TableToggleCell

export const TableCell = CellComponent
