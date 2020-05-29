import React from "react";
import SEO from "../components/seo";
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap';
import Layout from "../components/layout";
import { slugify } from '../util/utilityFunctions';
import authors from '../util/authors';
import demkantor from '../images/david.jpg';

const AboutPage = () => (
  <Layout pageTitle="This is me!">
    <SEO title="About" />
      <p>This is me...</p>
      <Row className="mb-4">
        <div className="col-md-3">
          <img src={demkantor} style={{ maxWidth: '100% '}} alt="demkantor"/>
        </div>
        <div className="col-md-8">
          <Card style={{ minHeight: '100%' }}>
            <CardBody>
              <CardTitle>{authors[0].name}</CardTitle>
              <CardText>{authors[0].bio}</CardText>
              <Button
                className="text-uppercase"
                color="primary"
                href={`/author/${slugify(authors[0].name)}`}>
                  View posts
              </Button>
            </CardBody>
          </Card>
        </div>
      </Row>
      <h3 className="mb-4">Check me out via links at the bottom of this page!</h3>
      <p className="text-center">demkantor@gmail.com</p>
  </Layout>
);


export default AboutPage;
