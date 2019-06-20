import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Avatar from '../avatar'

import headerStyle from './header.module.css'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          description
          author {
            name
          }
          nav {
            name
            path
          }
        }
      }
    }
  `)

  return (
    <header style={{ background: `#f7f7f7` }}>
      <div>
        <Avatar />
        <div className={headerStyle.text}>
          <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{data.site.siteMetadata.author.name}</p>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        <nav style={{ textAlign: 'center'}}>
          <ul>
            {data.site.siteMetadata.nav.map(l => {
              return <li style={{ padding: '20px 10px', margin: '0 10px', display: 'inline-block' }}><Link to={l.path} >{l.name}</Link></li>
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
