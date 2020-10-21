module.exports = {
  pathPrefix: "/geb-website",
  siteMetadata: {
    title: "Reflexer Labs",
    titleTemplate: "%s · Volatility dampened synthetic instruments",
    description: "Volatility dampened synthetic instruments",
    keywords: "Volatility, dampened, synthetic, instruments",
    siteUrl: "https://www.reflexer.finance",
    image: "/android-chrome-512x512.png",
    favicon: "/favicon.ico",
    twitter: "@reflexerfinance",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: __dirname + "/static/",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:400,600"],
        },
      },
    },
  ],
}
