module.exports = {
  siteMetadata: {
    title: "moms-blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "74mcZt-1DSebEucoT7CGKWIMOqUP_VnUbF2Ad-dfIjA",
        spaceId: "1jpfhiwzjjjy",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-SJPKHG2B59",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
