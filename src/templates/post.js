import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const PostTemplate = ({data, location}) => {
    const { wordpressPost: post } = data;
    const { allWordpressPost: { edges: allPosts } } = data;

    return (
        <Layout location={location} title={post.title} allPosts={allPosts}>
            <Helmet
                title={post.title}
                meta={[
                    { name: 'description', content: post.excerpt },
                ]}
            />

            <section id="postTemplateHero" className="hero is-shady is-medium has-background">
                <div className="hero-background is-transparent">
                    { post.featured_media && (
                        <Img
                            className="hero-img"
                            src={post.featured_media.localFile.childImageSharp.sizes.src}
                            fluid={post.featured_media.localFile.childImageSharp.sizes}
                            imgStyle={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                            // alt={post.title}
                            // draggable={true}
                        />
                    )}
                </div>

                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title is-1">
                            {post.title}
                        </h1>
                        <h2 className="subtitle">
                            by {post.author.name}
                        </h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column"></div>

                        <div className="column is-three-quarters">
                            <div className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <Link to="/"><span className="subtitle is-6">👈 Go Back</span></Link>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <p className="is-5">
                                            <span className="is-6 has-text-weight-medium">CATEGORY: </span> {post.categories && post.categories.map(category => category.name)} | <span className="is-6">{post.date}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <br/>
                            <br/>

                            <div className="" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        <div className="column"></div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

PostTemplate.propTypes = {
    data: PropType.shape({}).isRequired,
};

export default PostTemplate;

export const postTemplateQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
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
        allWordpressPost {
            ...AllPosts
        }
    }
`;
