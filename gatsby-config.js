require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.js
    siteTitle: `Trial Team 3D`,
    siteTitleAlt: `Trial Team 3D`,
    siteHeadline: `Trial Team 3D`,
    siteUrl: `https://trialteam3d.gatsbyjs.io`,
    siteDescription: `Trial Team 3D`,
    siteLanguage: `it`,
    siteImage: `/banner.jpg`,
    author: `Marco Pedrinazzi`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Chi siamo`, slug: `/chi-siamo` },
          { name: `Team`, slug: `/team` },
          { name: `Sponsor`, slug: `/sponsor` },
          { name: `Foto`, slug: `/foto` }
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/jodie#changing-your-fonts
        web: [
          {
            name: `Work Sans`,
            file: `https://fonts.googleapis.com/css2?family=Work+Sans:wght@400..700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trial Team 3D`,
        short_name: `Trial Team 3D`,
        description: `Trial Team 3D`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
