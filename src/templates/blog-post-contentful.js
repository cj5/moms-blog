import React, {useEffect} from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styleVar from '../components/styles/variables'

const postStyle = {
  fontSize: `20px`,
  lineHeight: `1.6`,
}

const imgStyle = {
  border: `1px solid ${styleVar.color_1}`,
}

const BlogPost = (props) => {
  const post = get(props, 'data.contentfulBlogPost')
  const richTextRaw = JSON.parse(post.post.raw)
  const richText = documentToReactComponents(richTextRaw)

  useEffect(() => {
    const linksNL = document.querySelectorAll('main a')
    const links = Array.prototype.slice.call(linksNL)
    links.map((el) => el.setAttribute('target', '_blank'))
  }, []);

  return (
    <Layout>
      <main className={`page_blog-post post_${post.slug} py-10`}>
        <div className="contain">
          <div className="mxw-lg">
            <h2 className="heading fz-xl mb-2">{post.title}</h2>
            <p className="heading-sm mb-8">{post.createdAt}</p>
            <img src={post.image.file.url} style={imgStyle} alt="" />
            <p className="mt-12" style={postStyle}>{richText}</p>
          </div>
        </div>
      </main>
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
      slug
    }
  }
`
