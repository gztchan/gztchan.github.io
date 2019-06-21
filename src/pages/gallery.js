import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from '../layouts/general'
import PostLink from '../components/post-link'

const GalleryPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  return (
    <GeneralLayout>
      <div className={{}}>
        {data.allAlbumsJson.edges.map(({ node }) => {
          return <PostLink data={node} />
        })}
      </div>
    </GeneralLayout>
  )
}

export const query = graphql`{
  allAlbumsJson(limit: 1000) {
    edges {
      node {
        title
        path
        date
      }
    }
  }
}
`

export default GalleryPage
