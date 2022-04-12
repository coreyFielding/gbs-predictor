// Styles
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
          {sortOrder.key === text.toLowerCase() ? (
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
          ) : (
            <div className={styles.sort}>
              <svg
                id="Layer_1"
                width="13"
                height="12"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130 130"
              >
                <path d="M101.68,49.59a5,5,0,0,1-3.54-1.47L65,15,31.92,48.12A5,5,0,0,1,24.84,41L58,7.93h0a10,10,0,0,1,14.16,0h0l33,33a5.17,5.17,0,0,1,.08,7.25A5,5,0,0,1,101.68,49.59Z" />
                <path d="M28.32,80.41a5,5,0,0,1,3.54,1.47L65,115l33.11-33.1A5,5,0,1,1,105.16,89L72.05,122.07h0a10,10,0,0,1-14.16,0h0l-33-33a5.17,5.17,0,0,1-.08-7.25A5,5,0,0,1,28.32,80.41Z" />
              </svg>
            </div>
          )}
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
