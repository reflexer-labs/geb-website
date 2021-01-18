require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Reflexer Labs",
    titleTemplate: "%s",
    description: "We are building $RAI. A Low Volatility Collateral for DeFi",
    keywords: "RAI, DeFi, ETH, stable asset are core",
    siteUrl: "https://www.reflexer.finance",
    image: "/android-chrome-512x512.png",
    favicon: "/icon.png",
    twitter: "@reflexerfinance",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: __dirname + "/static/",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
