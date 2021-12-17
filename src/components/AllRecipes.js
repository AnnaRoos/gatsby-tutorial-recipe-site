import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

const query = graphql`
  {
    allContentfulRecipe(sort: { order: ASC, fields: title }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  return (
    <div>
      <h4>All Recipes</h4>
      <TagsList />
      <RecipesList />
    </div>
  )
}

export default AllRecipes
