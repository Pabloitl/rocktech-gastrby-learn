import Anchor from "../components/anchor"
import Card from "../components/card"
import Layout from "../components/layout"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

export default function University({ data }) {
  const university = data.allUniversities.edges[0].node

  return (
    <Layout>
      <h1 className="p-1 text-xl"> {university.name} </h1>
      <div className="p-10">
        <StaticImage alt="University" src="../images/university.jpeg" />
      </div>
      <Card>
        <p> Country: {university.country} </p>
        <p> Code: {university.code} </p>
      </Card>
      <Card>
        <h3 className="text-lg">Web pages</h3>
        <ul>
          {university.pages.map((page, index) => {
            return (
              <li key={index} className="italic">
                <Anchor to={page}>{page}</Anchor>
              </li>
            )
          })}
        </ul>
      </Card>
      <Card>
        <h3 className="text-lg">Domains</h3>
        <ul>
          {university.domains.map((domain, index) => {
            return (
              <li key={index} className="italic">
                {domain}
              </li>
            )
          })}
        </ul>
      </Card>
    </Layout>
  )
}

export const query = graphql`
  query ($name: String) {
    allUniversities(filter: { name: { eq: $name } }) {
      edges {
        node {
          name
          code
          country
          pages
          domains
        }
      }
    }
  }
`
