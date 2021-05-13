import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import styleVar from '../styles/variables'
import styleMixin from '../styles/mixins'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const FlexGrid = styled.div`
  ${styleMixin.flexGrid(3, '30px')}
`

const postStyle = {
  position: `relative`,
  border: `1px solid ${styleVar.color_1}`,
  maxHeight: `455px`,
  overflow: `hidden`,
  textDecoration: `none`,
}

const imgStyle = {
  objectFit: `cover`,
  width: `100%`,
  height: `261px`,
}

const Main = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: [createdAt], order: DESC}) {
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
            slug
          }
        }
      }
    }
  `)

  let richText = []
  data.allContentfulBlogPost.edges.map((item) => {
    const data = JSON.parse(item.node.post.raw)
    const value = documentToReactComponents(data)
    // const length = 200
    // let trimmedValue
    // if (value.length > length) {
    //   trimmedValue = value.substr(0, length - 3) + '...'
    // } else {
    //   trimmedValue = value.substr(0, length)
    // }
    richText.push(value)
  })

  return (
    <main className="page_blog mt-20 mb-32">
      <div className="contain">
        <FlexGrid>
          {data.allContentfulBlogPost.edges.map((item, i) => (
            <Link key={i} style={postStyle} to={item.node.slug}>
              <div>
                <img src={item.node.image.file.url} style={imgStyle} alt="" />
                <div className="p-4 fz-xs">
                  <p className="heading-sm">{item.node.createdAt}</p>
                  <h3 className="heading fz-lg mt-1 mb-4">{item.node.title}</h3>
                  {richText[i]}
                </div>
              </div>
              <div className="cover absolute bottom-0 w-full h-5 bg-white"></div>
            </Link>
          ))}
        </FlexGrid>
      </div>
    </main>
  )
}

export default Main
