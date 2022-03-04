import Link from "gatsby-link"
import React from "react"

function Anchor({ to, children }) {
  return (
    <Link to={to}>
      <a className="text-sky-600 hover:text-sky-800">{children}</a>
    </Link>
  )
}

export default Anchor
