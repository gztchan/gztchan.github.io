import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from '../layouts/general'
import PostLink from '../components/post-link'

const GalleryPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {

  const sorted = data.allAlbumsJson.edges.sort((a, b) => {
    const _a = (new Date(a.node.date)).getTime();
    const _b = (new Date(b.node.date)).getTime();
    return _b - _a;
  })

  return (
    <GeneralLayout>
      <div className={{}}>
        {sorted.map(({ node }, index) => {
          return <PostLink key={index} data={node} />
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
