import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from '../components/Post';
import PaginationLinks from '../components/PaginationLinks';


const IndexPage = () => {
  // change this number to reflect posts per page
  const postsPerPage = 3;
  let numberOfPages;

  return (
    <Layout pageTitle="Welcome! Hope you find some usefull tips!">
      <SEO title="Home" />
          <StaticQuery query={indexQuery} render={data => {
            numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    body={node.exerpt}
                  />
                ))}
                <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
              </div>
              )
          }}/>
    </Layout>
  )
};

// change limit to the number of posts per page wanted
const indexQuery = graphql
`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMM Do YYYY")
              author
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          excerpt
        }
      }
    }
  }
`


export default IndexPage;
