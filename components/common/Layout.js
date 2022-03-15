import PropTypes from "prop-types"
import { Header, Footer } from "../"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}
