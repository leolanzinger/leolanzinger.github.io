import * as React from "react"
import Footer from "../components/footer"
import "../styles/style.css"
import "../styles/work.css"
import recomImage from "../images/recom.png"
import studioImage from "../images/studio.png"
import babbelImage from "../images/babbel.png"

const mainStyles = {
    color: "#222222",
    fontFamily: "neue-haas-grotesk-display, Helvetica Neue, helvetica, sans-serif, serif"
  }

const WorkPage = () => {
    return (
        <main style={mainStyles}>
            <div className="grid work border-top border-bottom">
              <div className="box-12 padding-left padding-right">
                <div className="grid">
                  <div className="box-6 padding-content">
                    <h4>work</h4>
                  </div>
                  <div className="box-6 padding-content right-align">
                    <h4><a href="/">Leonardo Lanzinger</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid work border-bottom">
              <div className="box-12 padding-left">
                <div className="grid">
                  <div className="box-5 padding-content">
                    <h3 className="no-top-margin">Recommerce at Zalando</h3>
                    <date>2021 - current</date>
                    <p>
                    As Principal Product Designer, I worked on the customer experience of Zalando customers who shop and sell second-hand fashion, as well as the experience of customers using Zalando for recycling their old unwearable clothes.
                    </p>
                    <p>
                    Past and ongoing projects include: leading user research to identify strategic opportunities in the overall customer journey, product design work on the existing second-hand service as well as on an upcoming recycling service and workshops facilitation.
                    </p>
                  </div>
                  <div className="box-1 border-right"></div>
                  <div className="box-6 padding-content margin-right border-right">
                    <img src={recomImage} alt="recommerce" className="case-study" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid work border-bottom">
              <div className="box-12 padding-left">
                <div className="grid">
                  <div className="box-5 padding-content">
                    <h3 className="no-top-margin">The Studio at Zalando</h3>
                    <date>2017 - 2021</date>
                    <p>
                      Together with The Studio team, I explored different strategic topics including Zalando’s sustainability digital experience, connecting brick and mortar stores to the Zalando platform and visualising the partnership with Sephora and Nike.<br />
                    </p>
                    <p>
                      Being a bit of a design process geek, I dived into design ops topics and managed the design community methods toolkit, designed the <a href="https://www.youtube.com/watch?v=uTZAErqLPd8">design system contribution model</a> and developed a Figma plugin to help colleagues create prototypes faster.
                      During a brief stint in the design system team, I also helped out as a front-end developer to develop the newly designed components.
                    </p>
                  </div>
                  <div className="box-1 border-right"></div>
                  <div className="box-6 padding-content margin-right border-right">
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
            <div className="grid work border-bottom">
              <div className="box-12 padding-left">
                <div className="grid">
                  <div className="box-5 padding-content">
                    <h3 className="no-top-margin">Babbel</h3>
                    <date>2016</date>
                    <p>
                    As an interaction designer intern, I redesigned the sound recording tool used by language experts to record audio material for Babbel online language courses, integrating it in a git-based CAT tool.
                    </p>
                  </div>
                  <div className="box-1 border-right"></div>
                  <div className="box-6 padding-content margin-right border-right">
                    <img src={babbelImage} alt="babbel" className="case-study" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid work border-bottom padding-left">
              <div className="box-12 border-right padding-content">
                <Footer />
              </div>
            </div>
        </main>
  )
}

export default WorkPage

export const Head = () => <title>Leonardo Lanzinger - work</title>