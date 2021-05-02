import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

 const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHomePage {
        edges {
          node {
            heading
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="">{data.allContentfulHomePage.edges[0].node.heading}</h2>
      </div>
    </section>
  )
}

export default Hero
