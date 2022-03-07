export const TableHead = ({ children, styles: userStyles }) => (
  <thead>
    <tr>{headings}</tr>
  </thead>
)
export const TableTextHeader = ({ text }) => <th>{text}</th>
export const TableDropdownHeader = ({ children }) => <th>{children}</th>

const TableHeadingComponent = ({ headings }) => (
  <TableHead>{headings}</TableHead>
)

TableHeadingComponent.Text = TableTextHeader
TableHeadingComponent.Dropdown = TableDropdownHeader

export const TableHeading = TableHeadingComponent
