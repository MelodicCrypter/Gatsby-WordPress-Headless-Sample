<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  WordPress, Gatsby, and Netlify (sample)
</h1>


This is just a sample implementation of a headless blogging. And the goal for this example was to only pull (Read) data and put the data on an external frontend.

## 🚀 Quick start

1. **Edit the gatsby-config.js**

    Change WordPress details so that you can connect to it.

    ```shell
    {
    	resolve: `gatsby-source-wordpress`,
        options: {
        	baseUrl: `yourwordpress.domain.here`,
        	protocol: `https`,
        	hostingWPCOM: false,
        	useACF: false,
        },
    },
    ```

1. **Start developing.**

    Just hit the code and check your site at `http://localhost:8000`!

    ```shell
    gatsby develop
    ```

1. **Access the graphql**

    Your graphql endpoint is available at

    __`http://localhost:8000/___graphql`_. 

