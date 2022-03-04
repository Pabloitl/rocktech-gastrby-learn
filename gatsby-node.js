const axios = require("axios")
const crypto = require("crypto")
const path = require("path")

const apiURL = "http://universities.hipolabs.com/search?country=Mexico"

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allUniversities {
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
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve(`src/templates/university.js`)
  result.data.allUniversities.edges.forEach(({ node }) => {
    createPage({
        path: `/universities/${node.name}`,
      component: template,
      context: {
          name: node.name
      },
    })
  })
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const universities = await axios.get(apiURL)

  universities.data.map(university => {
    const universityNode = {
      id: `${university.name}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Universities`,
      },
      children: [],
      name: university.name,
      country: university.country,
      code: university.alpha_two_code,
      pages: university.web_pages,
      domains: university.domains,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(universityNode))
      .digest(`hex`)

    universityNode.internal.contentDigest = contentDigest

    createNode(universityNode)
  })

  return
}
