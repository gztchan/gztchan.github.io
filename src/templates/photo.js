import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from '../layouts/general'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <GeneralLayout>
      <div className={{}}>
        <div className={{}}>
          1`23123123
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
