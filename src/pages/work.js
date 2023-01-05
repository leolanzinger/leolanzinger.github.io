import * as React from "react"
import Footer from "../components/footer"
import "../styles/style.css"
import "../styles/work.css"

const mainStyles = {
    color: "#222222",
    fontFamily: "neue-haas-grotesk-display, Helvetica Neue, helvetica, sans-serif, serif"
  }

const WorkPage = () => {
    return (
        <main style={mainStyles}>
            <div className="grid work">
                <div className="box-12 main">
                    <a className="no-italics" href="/">Leonardo Lanzinger</a>
                </div>
                <div className="box-7 main">
                    <h4>work</h4>
                    <h3 className="no-top-margin">Recommerce at Zalando</h3>
                    <date>2021 - current</date>
                    <p>
                        As the Senior Product Designer of the team, I am the responsible designer for the experience of Zalando customers who shop and sell second-hand fashion, as well as the experience of customers using Zalando for recycling their old unwearable clothes.
                    </p>
                    <h3>The Studio at Zalando</h3>
                    <date>2017 - 2021</date>
                    <p>
                        Together with The Studio team, I explored different strategic topics including Zalando’s sustainability digital experience, connecting brick and mortar stores to the Zalando platform and visualising the partnership with Sephora and Nike.<br />
                    </p>
                    <p>
                        Being a bit of a design process geek, I dived into design ops topics and managed the design community methods toolkit, designed the <a href="https://www.youtube.com/watch?v=uTZAErqLPd8">design system contribution model</a> and developed a Figma plugin to help colleagues create prototypes faster.
                        During a brief stint in the design system team, I also helped out as a front-end developer to develop the newly designed components.
                    </p>
                    <h3>Babbel</h3>
                    <date>2016</date>
                    <p>
                        As an interaction designer intern, my responsibility was to redesign the sound recording tool used by language experts to record audio material for Babbel online language courses, integrating it iin a git-based workflow.
                    </p>
                </div>
                <div className="box-1"></div>
                <div className="box-4 main">
                    <Footer />
                </div>
            </div>
        </main>
  )
}

export default WorkPage

export const Head = () => <title>Leonardo Lanzinger - work</title>