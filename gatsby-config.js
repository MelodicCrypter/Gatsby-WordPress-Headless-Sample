module.exports = {
    siteMetadata: {
        title: `Headless Gatsby and Wordpress`,
        author: `Hugh Caluscusin`,
        description: `A sample site for implementing headless blogging for Gatsby and Wordpress.`,
        siteUrl: `https://headless-test.netlify.com/`,
        social: {
            twitter: `MelodicCrypter`,
        },
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Headless Gatsby and Wordpress`,
                short_name: `HGW`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/hc_logo.png`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // your WordPress source
                baseUrl: `melodiccrypter.com/headless`,
                protocol: `https`,
                // is it hosted on wordpress.com, or self-hosted?
                hostingWPCOM: false,
                // does your site use the Advanced Custom Fields Plugin?
                useACF: false,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
