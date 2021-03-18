module.exports = {
  siteMetadata: {
    title: "gatsby-3-static-query-issue",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/_posts`,
      },
      __key: "posts",
    },
  ],
};
