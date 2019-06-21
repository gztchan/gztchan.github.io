
import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from '../layouts/general'

import albumStyle from '../styles/templates/album.module.css'

function process(url) {
  return url + '?x-oss-process=image/quality,q_80/resize,h_1024'
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { albumsJson } = data
  return (
    <GeneralLayout>
      <div className={albumStyle.container}>
        <div className={albumStyle.album}>
          <h1>{albumsJson.title}</h1>
          <div>
            {albumsJson.collection.map(photo => {
              return (
                <figure className={albumStyle.figureWrap}>
                  <img src={process(photo.url)} alt={true} />
                  {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
                </figure>
              )
            })}
          </div>
        </div>
      </div>
    </GeneralLayout>
  )
}

export const query = graphql`
  query($path: String!) {
    albumsJson(path: { eq: $path }) {
      title
      path
      collection {
        url
        caption
      }
    }
  }
`
