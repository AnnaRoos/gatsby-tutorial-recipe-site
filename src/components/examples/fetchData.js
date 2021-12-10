import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexdata.map((item, index) => {
          return (
            <p key={index}>
              {item.name} : {item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FetchData
