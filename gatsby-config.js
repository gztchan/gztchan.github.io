module.exports = {
  siteMetadata: {
    title: `Spread ideas from tony's deep inside.`,
    description: `Excited to learn, research and make interesting things. 😝`,
    author: {
      name: `Tony Chan`,
      avatar: 'https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/WechatIMG1851.jpeg'
    },
    nav: [
      { name: 'Home', path: '/', icon: 'faHome' },
      { name: 'Posts', path: '/posts', icon: 'faEnvelopeOpenText' },
      { name: 'Gallery', path: '/gallery', icon: 'faCamera' },
      { name: 'Contact', path: '/posts/contact-me', icon: 'faSms' },
      // { name: 'About', path: '/posts/about-tony-chan', icon: 'faAddressCard' },
    ],
    alipay: 'https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/20190621205545.png?x-oss-process=image/quality,q_50',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-json`,
      options: [{ typeName: 'Json' }],
    },
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
        icon: `src/images/artsypink-icon.png`, // This path is relative to the root of the site.
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
