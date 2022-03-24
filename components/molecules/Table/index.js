// Components
import { TableCell } from "./TableCell"
import { TableHeading } from "./TableHeader"

// Styles
import cn from "classnames"
import styles from "./table.module.scss"

const classes = (defaultStyles, userStyles) => cn(defaultStyles, userStyles)

export const TableRow = ({ children, styles: userStyles, ...props }) => {
  return (
    <tr className={styles.tableRow + ' ' + styles.tableRow_ladbrokes} {...props}>
      {children}
    </tr>
  )
}

export const TableBody = ({ children, ...props }) => (
  <tbody className={styles.tableBody}>{children}</tbody>
)

const TableComponent = ({ children, styles: userStyles, ...props }) => {
  return (
    <table className={classes(styles.table, userStyles)} {...props}>
      {children}
    </table>
  )
}

TableComponent.Row = TableRow
TableComponent.Body = TableBody
TableComponent.Heading = TableHeading
TableComponent.Cell = TableCell

export const Table = TableComponent
