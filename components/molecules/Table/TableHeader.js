// Components
import styles from "./table.module.scss"

export const TableHead = ({ children }) => (
  <thead className={styles.tableHead}>
    <tr>{children}</tr>
  </thead>
)

export const TableImageHeader = ({
  children,
  styles: userStyles,
  ...props
}) => (
  <th className={userStyles}>
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="2.69922" width="2.66728" height="6.30022" fill="#254933" />
      <rect x="3.55664" width="2.66728" height="9.00031" fill="#254933" />
      <rect
        x="7.11133"
        y="4.5"
        width="2.66728"
        height="4.50015"
        fill="#254933"
      />
    </svg>
  </th>
)

export const TableTextHeader = ({ text }) => (
  <th className={styles.tableHeading}>
    <span className="span--tableHeading">{text}</span>
  </th>
)
export const TableSortHeader = ({ text, sortOrder, handleSortByColumn }) => {
  return (
    <th
      onClick={() => handleSortByColumn(text)}
      className={styles.tableHeading}
    >
      <div className={styles.sortHeading}>
        <span className="span--tableHeading">{text}</span>
        <div
          className={
            sortOrder.key === text.toLowerCase() && sortOrder.order === "asc"
              ? styles.asc
              : styles.desc
          }
        >
          <svg
            width="13"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke={
                sortOrder.key === text.toLowerCase() &&
                sortOrder.order === "asc"
                  ? "red"
                  : "#3cd176"
              }
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </th>
  )
}

const TableHeadingComponent = ({ headings }) => (
  <TableHead>{headings}</TableHead>
)

TableHeadingComponent.Image = TableImageHeader
TableHeadingComponent.Text = TableTextHeader
TableHeadingComponent.Sort = TableSortHeader

export const TableHeading = TableHeadingComponent
