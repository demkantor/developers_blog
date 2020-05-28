import React from "react";
import Link from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout pageTitle="Cant find the page! lets go back and try again!">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={`/`}>
      Take me Home
    </Link>
  </Layout>
)

export default NotFoundPage;
