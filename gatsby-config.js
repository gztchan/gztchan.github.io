module.exports = {
  siteMetadata: {
    title: `Spread ideas from tony's deep inside.`,
    description: `Excited to learn, research and make interesting things. 😝`,
    author: {
      name: `Tony Chan`,
      avatar: 'https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/WechatIMG1851.jpeg',
    },
    nav: [
      { name: 'Home', path: '/' },
      { name: 'Posts', path: '/posts' },
      // { name: 'Gallery', path: '/gallery' },
      // { name: 'Contact', path: '/posts/contact-me' },
      // { name: 'About', path: '/about' },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          showLineNumbers: false,
        }]
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
