import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from './Footer';
import Header from "./header";
import '../styles/index.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
