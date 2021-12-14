import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const PageQuery = ({ data }) => {
  const author = data.site.info.author
  return (
    <Layout>
      <h2>Page Query</h2>
      <p>Author: {author}</p>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexdata {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
export default PageQuery
