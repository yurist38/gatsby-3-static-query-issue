import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log('Site data: ', siteData);

  return (
    <main>
      Test (check console)
    </main>
  )
}

export default IndexPage
