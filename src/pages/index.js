import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './main.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allWordpressPost.edges;
    const tempAuthorImg = data.allWordpressWpUsers.edges[0].node.simple_local_avatar.wordpress_96;

    return (
        <Layout location={location} title={siteTitle} allPosts={posts}>
            <SEO title="Hugh Caluscusin - Sample Headless Blog" />

            <section className="section">
                <div className="container">
                    <div className="columns">

                        <div className="column"></div>

                        <div className="column is-four-fifths">
                            <div className="row columns">

                                {posts.map(post => {
                                    return (
                                        <div key={post.node.id} className="column is-one-third">
                                            <div className="card large">
                                                <div className="card-image">
                                                    <figure className="image">
                                                        <Link to={`/post/${post.node.slug}`}>
                                                            <Img
                                                                src={post.node.featured_media.localFile.childImageSharp.sizes.src}
                                                                sizes={post.node.featured_media.localFile.childImageSharp.sizes}
                                                                alt={post.node.title}
                                                            />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="card-content">
                                                    <h5 className="title is-3">
                                                        <Link className="post-title" to={`/post/${post.node.slug}`}>
                                                            {post.node.title}
                                                        </Link>
                                                    </h5>
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <figure className="image is-48x48">
                                                                <img className="is-rounded" src={tempAuthorImg} alt="Author Avatar" />
                                                            </figure>
                                                        </div>
                                                        <div className="media-content">
                                                            <p className="title is-5 no-padding author-name">{post.node.author.name}</p>
                                                            <p className="author-link">
                                                                <span className="is-6"><a href="#">@twitterid</a></span>
                                                            </p>
                                                            <p className="subtitle is-6">{post.node.author.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                                        <div className="background-icon"><span className="icon-twitter"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="column"></div>

                    </div>
                </div>


            </section>
        </Layout>
    );
};

export default BlogIndex;

export const homePageQuery = graphql`
    query {
        site {
            ...SiteInformation
        }
        allWordpressPost {
            ...AllPosts
        }
        allWordpressWpUsers {
            edges {
                node {
                    simple_local_avatar {
                        wordpress_96
                    }
                }
            }
        }
    }
`;
