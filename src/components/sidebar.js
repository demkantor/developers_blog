import React from "react";
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { graphql, StaticQuery } from "gatsby";
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Sidebar = () => (
    <div>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Newsletter
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Enter email address..."
                        />
                    </FormGroup>
                    <button className="btn btn-outline-success text-uppercase">
                        Subscribe
                    </button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Advertisement
                </CardTitle>
                <img src="https://images.unsplash.com/photo-1556009228-1d5eb2c8e10b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="advert" style={{ width: "100%" }}/>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Recent Posts
                </CardTitle>
                <StaticQuery
                    query={sidebarQuery}
                    render={(data) => (
                        <div>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Card key={node.id}>
                                    <Link to={node.frontmatter.path}>
                                        <Img className="card-image-top"
                                            fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={node.frontmatter.path}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                )}/>
            </CardBody>
        </Card>
    </div>
);

// const advertQuery = graphql
// `
//   query {
//     fileName: file(relativePath: { eq: "images/advert.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
const sidebarQuery = graphql
`
  query sidebarQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`


export default Sidebar;
