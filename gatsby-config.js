require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "moms-blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-SJPKHG2B59",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
