import React from "react"
import { graphql } from "gatsby"

const PageQuery = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>Page Query</h2>
      <p>Author: {author}</p>
    </div>
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
