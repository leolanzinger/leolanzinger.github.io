import * as React from "react";
import Img from "gatsby-image";
import { useRef, useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/work.css";
import recomImage from "../images/recom.png";
import studioImage from "../images/studio.png";
import babbelImage from "../images/babbel.png";

const mainStyles = {
    color: "#222222",
    fontFamily: "neue-haas-grotesk-display, Helvetica Neue, helvetica, sans-serif, serif",
    boxSizing: "border-box"
  }

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

    return (
      <div>
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
            <div className="grid work work-border">
              <div className="box-12 work-box">
                <div className="grid">
                  <div className="box-6 work-content-wrapper">
                    <h3 className="no-top-margin">Recommerce at Zalando</h3>
                    <date>2021 - current</date>
                    <p>
                      As Principal Product Designer, I am responsible for the customer experience of Zalando customers who shop and sell second-hand fashion, as well as the experience of customers using Zalando to recycle their old unwearable clothes.
                    </p>
                    <p>
                      During my time in the team I led several user research projects and applied both exploratory and evaluative methods, I designed solutions for customer problems at different scales of impact — both leading cross-team initiatives as well as working embedded in the Recommerce agile development team.
                      Besides that, I also co-facilitated the definition of the product roadmap by running a series of Service Blueprint design workshops.
                    </p>
                  </div>
                  {/* <div className="box-1"></div> */}
                  <div className="box-6 work-image">
                    <img src={recomImage} alt="recommerce" className="case-study" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid work work-border">
              <div className="box-12 work-box">
                <div className="grid">
                  <div className="box-6 work-content-wrapper">
                    <h3 className="no-top-margin">The Studio at Zalando</h3>
                    <date>2017 - 2021</date>
                    <p>
                      The Studio is a nimble design unit at Zalando, working on early stage ideas and opportunities. During my time there, I explored different strategic topics — including Zalando’s sustainability digital experience, connecting brick and mortar stores to the Zalando platform and exploring the B2B partnership with Sephora and Nike.<br />
                    </p>
                    <p>
                      Being a bit of a design process geek, I dived into design ops topics and managed the design community methods toolkit, designed the <a href="https://www.youtube.com/watch?v=uTZAErqLPd8">design system contribution model</a> and developed a Figma plugin to help colleagues create prototypes faster.
                    </p>
                    <p>
                      During a brief stint in the design system team, I also helped out as a front-end developer to develop the newly designed components.
                    </p>
                  </div>
                  {/* <div className="box-1"></div> */}
                  <div className="box-6 work-image">
                    <img src={studioImage} alt="thestudio" className="case-study" />
                    <caption>
                      Some Zalando projects I worked on between 2017 and 2021.
                      <br />
                      Illustration credits to my amazing communication design colleagues.
                    </caption>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid work">
              <div className="box-12 work-box">
                <div className="grid">
                  <div className="box-6 work-content-wrapper">
                    <h3 className="no-top-margin">Babbel</h3>
                    <date>2016</date>
                    <p>
                    As an Interaction Designer Intern in the CAT team, I redesigned the sound recording tool used by language experts to record audio material for Babbel online language courses, integrating it in a git-based content authoring tool, called (you guessed it right!) CAT.
                    </p>
                  </div>
                  {/* <div className="box-1"></div> */}
                  <div className="box-6 work-image">
                    <img src={babbelImage} alt="babbel" className="case-study" />
                  </div>
                </div>
              </div>
            </div>
        </main>
        <div
          style={mainStyles} className="contacts-wrapper work-contacts">
           <a href="/">Leonardo Lanzinger</a>
          <div className="contact-links">
            <a href="mailto:leonardo.lanzinger@gmail.com" className="social-link">Email</a>
            <a href="https://twitter.com/Leo_Lanzinger" className="social-link">Twitter</a>
            <a href="https://www.linkedin.com/in/leonardolanzinger/" className="social-link">Linkedin</a>
            <a href="https://github.com/leolanzinger" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
  )
}

export default WorkPage

export const Head = () => <title>Leonardo Lanzinger - work</title>