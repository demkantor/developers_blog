const { slugify } = require('./src/util/utilityFunctions');
const path = require('path');
const authors = require('./src/util/authors');
const _ = require('lodash');

// creates a url slug from the title page of each post
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title);
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        });
    };
};

// creates the single page posts
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js'),
        postList: path.resolve('src/templates/post-list.js'),
        authorPosts: path.resolve('src/templates/author-posts.js')
    };

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        const posts = res.data.allMarkdownRemark.edges;
        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Passing slug for template to use to fetch the post
                    slug: node.fields.slug,
                    // find author image from authors.js and pass to single-post.js
                    imageUrl: authors.find(person => person.name === node.frontmatter.author).imageUrl
                }
            });
        });

        // gets all tags
        let tags = [];
        _.each(posts, edge => {
            if (_.get(edge, `node.frontmatter.tags`)) {
                tags = tags.concat(edge.node.frontmatter.tags);
            };
        });

        let tagPostCounts = {};
        tags.forEach(tag => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        });

        tags = _.uniq(tags);

        // create the all tags page
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            }
        });
        
        // create single tag post pages
        tags.forEach((tag) => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag
                }
            });
        });

        // how many posts per page do we want? creating that number here
        const postsPerPage = 3;
        const numberOfPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numberOfPages }).forEach((_, index) => {
            const isFirstPage = index === 0;
            const currentPage = index + 1;
            // dont create more pages until after first page
            if (isFirstPage) return;

            createPage({
                path: `/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numberOfPages: numberOfPages,
                    currentPage: currentPage,
                }
            });
        });
        // Create author posts pages
        authors.forEach(author => {
            createPage({
                path: `/author/${slugify(author.name)}`,
                component: templates.authorPosts,
                context: {
                    authorName: author.name,
                    imageUrl: author.imageUrl,
                }
            });
        });
    });
};