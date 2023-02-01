import * as React from "react";
import Footer from "../components/footer";
import "../styles/style.css";
import "../styles/work.css";
import { useEffect, useState } from "react";
import { graphql } from "gatsby";

const mainStyles = {
    color: "#222222",
    fontFamily: "neue-haas-grotesk-display, Helvetica Neue, helvetica, sans-serif, serif"
  }

const PortfolioPage = ({data}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark
  return (
    <main style={mainStyles}>
        <div className="grid work work-main-grid">
          <div className="box-12 title-wrapper">
            <div className="grid">
              <div className="box-6 title-box">
                <h4>work</h4>
              </div>
              <div className="box-6 subtitle-box">
                <h4><a href="/">Leonardo Lanzinger</a></h4>
              </div>
            </div>
          </div>
        </div>
        <div className="grid work">
          <div className="box-12">
            <div className="grid">
              <div className="box-12 portfolio-content-wrapper">
                <h1 className="no-top-margin">{frontmatter.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid work">
          <div className="box-12 work-content-wrapper footer-wrapper">
            <Footer />
          </div>
        </div>
    </main>
  )
}

export default PortfolioPage

export const Head = () => <title>Leonardo Lanzinger - work</title>

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }`
  