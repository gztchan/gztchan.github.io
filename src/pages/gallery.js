import React from "react"
import { graphql } from "gatsby"

const GalleryPage = () => (
  <>
    123
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`

export default GalleryPage
