import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="p-4 text-center bg-zinc-400">
    <Link to="/">
      <a className="flex items-center justify-center hover:text-yellow-300">
        <span className="mr-5 material-icons">school</span>
        <h1 className="mb-0 text-xl">Universities of Mexico</h1>
      </a>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
