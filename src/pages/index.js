import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import MainLayout from "../layouts/main"
import Header from "../components/header"
import SEO from "../components/seo"

import indexStyles from "../styles/index.module.css"

const IndexPage = ({ data }) => (
  <MainLayout>
    <SEO title="Artsypunk" />
    <div className={indexStyles.indexWrap}>
      <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
        <Header />
      </div>
    </div>
  </MainLayout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        nav {
          name
          path
        }
      }
    }
  }
`

export default IndexPage
