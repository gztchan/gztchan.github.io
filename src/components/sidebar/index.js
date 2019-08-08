import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'

import sidebarStyle from './sidebar.module.css'

const liStyle = {
  display: 'block',
  padding: '10px 16px',
  marginBottom: 15,
  background: '#f7f7f7',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer'
}

const PayCode = ({ url }) => (
  <div className={sidebarStyle.payCode}>
    <img src={url} alt={true}/>
  </div>
)

const Sidebar = ({ children }) => {

  const [visible, setVisible] = useState(false)

  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          nav {
            name
            path
            icon
          }
          alipay
        }
      }
    }
  `);

  return (
    <>
      <div className={sidebarStyle.sidebar}>
        <nav style={{ marginTop: 50 }}>
          <ul>
            {data.site.siteMetadata.nav.map(item => {
              return (
                <Link to={item.path}>
                  <li style={liStyle}>
                    <span style={{ marginRight: 10 }}><FontAwesomeIcon icon={Icons[item.icon]}/></span>
                    <span>{item.name}</span>
                  </li>
                </Link>
              )
            })}
            <li className={sidebarStyle.payWrap} style={liStyle} onClick={() => setVisible(!visible)}>
              <span style={{ marginRight: 10 }}><FontAwesomeIcon icon={BrandIcons.faAlipay}/></span>
              <span>{visible ? '❌' : 'Support'}</span>
              {visible ? <PayCode url={data.site.siteMetadata.alipay} /> : null}
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}

export default Sidebar
