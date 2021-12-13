import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

const StaticQueryHook = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>Title: {title}</h2>
    </div>
  )
}

export default StaticQueryHook
