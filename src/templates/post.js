import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from '../layouts/general'

import postStyle from '../styles/templates/post.module.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <GeneralLayout>
      <div className={postStyle.container}>
        <div className={postStyle.post}>
          <h1>{frontmatter.title}</h1>
          <p class={postStyle.date}>{frontmatter.date}</p>
          <div className={postStyle.content} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </GeneralLayout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
