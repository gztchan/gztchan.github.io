import React from "react"
import { graphql, Link } from "gatsby"

import GeneralLayout from '../layouts/general'

// import postStyle from '../styles/templates/post.module.css'

import PostLink from '../components/post-link'

const PostsPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  return (
    <GeneralLayout>
      <div className={{}}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostLink data={node.frontmatter} />
        })}
      </div>
    </GeneralLayout>
  )
}

export const query = graphql`{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
          title
          date
        }
      }
    }
  }
}
`

export default PostsPage
