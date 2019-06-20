import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import avatarStyles from './avatar.module.css'

const Avatar = ({}) => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      site {
        siteMetadata {
          author {
            avatar
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={avatarStyles.wrap}>
        <img src={data.site.siteMetadata.author.avatar} alt={true} />
      </div>
    </>
  )
}

export default Avatar
