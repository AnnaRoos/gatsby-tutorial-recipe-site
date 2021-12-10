/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "John",
    person: { name: "John", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexdata: [
      {
        name: "Anna",
        age: 39,
      },
      {
        name: "Richard",
        age: 43,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
