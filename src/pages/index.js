import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from '../components/Post';
import { Row, Col } from 'reactstrap';
import Sidebar from '../components/sidebar';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people, this is my home page!</h1>
    <Row>
      <Col md="8">
        <StaticQuery query={indexQuery} render={data => {
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
            </div>
            )
        }}/>
      </Col>
      <Col md="4">
        <Sidebar/>
      </Col>
    </Row>
  </Layout>
);

const indexQuery = graphql
`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
