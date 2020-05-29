import React from "react";
import { Card, CardText, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { graphql, StaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

const Sidebar = ({ author, authorFluid }) => (
    <div>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        {author.name}
                    </CardTitle>
                    <CardText>
                        {author.bio}
                    </CardText>
                    <div className="author-social-links text-center">
                        <ul>
                            <li>
                                <a href={author.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github">
                                        <i className="fab fa-github fa-lg" />
                                </a>
                            </li>
                            <li>
                                <a href={author.portfolio}
                                    targe="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio">
                                        <i className="fas fa-globe fa-lg" />
                                </a>
                            </li>
                            <li>
                                <a href={author.xda}
                                    targe="_blank"
                                    rel="noopener noreferrer"
                                    className="xda">
                                        <i className="fab fa-android fa-lg" />
                                </a>
                            </li>
                            <li>
                                <a href={author.codepen}
                                    targe="_blank"
                                    rel="noopener noreferrer"
                                    className="codepen">
                                        <i className="fab fa-codepen fa-lg" />
                                </a>
                            </li>
                            <li>
                                <a href={author.linkedin}
                                    targe="_blank"
                                    rel="noopener noreferrer"
                                    className="linkedin">
                                        <i className="fab fa-linkedin fa-lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        )}
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
                                    <Link to={`/${node.fields.slug}/`}>
                                        <Img className="card-image-top"
                                            fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={`/${node.fields.slug}/`}>
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
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
              slug
          }
        }
      }
    }
  }
`


export default Sidebar;
