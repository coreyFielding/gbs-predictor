// Components
import { ToggleFilter, SliderFilter } from "../.."
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

export const TableSliderCell = ({
  cellProps,
  styles: userStyles,
  ...props
}) => (
  <TableData {...cellProps} className={styles.cellSlider}>
    <SliderFilter {...props} />
  </TableData>
)

export const TableTextCell = ({ children, cellProps }) => (
  <TableData {...cellProps}>{children}</TableData>
)

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
CellComponent.Slider = TableSliderCell

export const TableCell = CellComponent
