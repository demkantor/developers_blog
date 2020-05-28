const { slugify } = require('./src/util/utilityFunctions');
const path = require('path');
const authors = require('./src/util/authors');

// creates a url slug from the title page of each post
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
};

// creates the single page posts
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplete = path.resolve('src/templates/single-post.js');

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if(res.errors) return Promise.reject(res.errors);
        
        const posts = res.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: singlePostTemplete,
                context: {
                    // Passing slug for template to use to fetch the post
                    slug: node.fields.slug,
                    // find author image from authors.js and pass to single-post.js
                    imageUrl: authors.find(person => person.name === node.frontmatter.author).imageUrl
                }
            })
        })
    });
};