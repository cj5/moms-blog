import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styleVar from '../styles/variables'
// import Hero from './hero'

const postStyle = {
  flex: `0 0 32%`,
  border: `1px solid ${styleVar.color_1}`,
}

const img = {
  objectFit: `cover`,
  width: `100%`,
  height: `250px`,
}

const Main = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            createdAt(formatString: "MMMM D, YYYY")
            image {
              file {
                url
              }
            }
            title
            post {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <main className="mt-12">
      {/* <Hero /> */}
      <div className="contain">
        <div className="flex justify-between">
          {data.allContentfulBlogPost.edges.map((item, i) => (
            <div key={i} style={postStyle}>
              <div>
                <img src={item.node.image.file.url} style={img} />
                <div className="p-4">
                  <p className="fz-2xs">{item.node.createdAt}</p>
                  <h3 className="heading fz-lg pt-2">{item.node.title}</h3>
                  {/* <p>{item.node.post.raw}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
