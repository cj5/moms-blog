import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const postStyle = {
  fontSize: `20px`,
  lineHeight: `1.6`,
}

const BlogPost = (props) => {
  const post = get(props, 'data.contentfulBlogPost')
  const data = JSON.parse(post.post.raw)
  const value = documentToReactComponents(data)

  return (
    <Layout>
      <div className="contain">
        <div className="mxw-lg py-10">
          <h2 className="heading fz-xl mb-2">{post.title}</h2>
          <p className="heading-sm mb-8">{post.createdAt}</p>
          <img src={post.image.file.url} alt="" />
          <p className="mt-12" style={postStyle}>{value}</p>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt(formatString: "MMMM D, YYYY")
      image {
        file {
          url
        }
      }
      post {
        raw
      }
    }
  }
`
