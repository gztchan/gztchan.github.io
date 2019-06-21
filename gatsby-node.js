/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`)
const path = require(`path`)

function createPostPage({ actions, graphql }) {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

function createAlbumPage({ actions, graphql }) {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/album.js`)

  return graphql(`
    query {
      allAlbumsJson(limit: 1000) {
        edges {
          node {
            title
            path
            collection {
              caption
              url
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allAlbumsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: template,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  return Promise.all([
    createPostPage({ actions, graphql }),
    createAlbumPage({ actions, graphql })
  ])
}
