import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Anchor from "../components/anchor"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <div className="p-10 text-center">
          <StaticImage alt="University" src="../images/university.jpeg" />
        <Anchor to="/universities">List Universities of Mexico</Anchor>
      </div>
  </Layout>
)

export default IndexPage
