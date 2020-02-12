import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import logo from '../../static/hc_logo.png';

const Layout = ({ location, title, children, allPosts }) => {
    const toggleMenu = e => {
        document.querySelector('#burger').classList.toggle('is-active');
        document.querySelector('#navbarMenu').classList.toggle('is-active');
    };

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                            <div id="logo">
                                <img src={logo} />
                            </div>
                    </Link>

                    <a id="burger" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarMenu" onClick={toggleMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item" >
                                Home
                        </Link>

                        <Link to="/#" className="navbar-item">
                                About
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Posts
                            </a>

                            <div className="navbar-dropdown">
                                {allPosts.map(post => {
                                    return (
                                        <Link className="navbar-item" to={`/post/${post.node.slug}`}>
                                            {post.node.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {children}

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Hugh Caluscusin</strong> Sample Gatsby for Headless Blog.
                        The source code is licesend <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </p>
                </div>
            </footer>
        </>
    );
};

export const siteInformationQuery = graphql`
    fragment SiteInformation on Site {
        siteMetadata {
            title
            description
        }
    }
`;

export const allPostsQuery = graphql`
    fragment AllPosts on wordpress__POSTConnection {
        edges {
            node {
                title
                content
                excerpt
                date(formatString: "DD, MMM YYYY")
                categories {
                    id
                    name
                }
                tags {
                    id
                    name
                }
                author{
                    name
                    description
                    avatar_urls{
                        wordpress_48
                    }
                }
                featured_media{
                    localFile{
                        childImageSharp{
                            id
                            sizes( maxWidth: 800 ) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
                slug
            }
        }
    }
`;

export default Layout;
