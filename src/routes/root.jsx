import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Portfolio from "../components/portfolio"
import arrowUpRight from "../assets/arrow-up-right.svg"
import recommerce from "../assets/recommerce_desktop.jpg"
import thestudio from "../assets/thestudio_desktop.jpg"
import babbel from "../assets/babbel_desktop.png"
import neverOffline from "../assets/never-offline-desktop.jpg"

export default function Root() {
    return (
        <main className="main__container">
            <div className="content">
                <div>
                    <span className="title">LEONARDO LANZINGER</span>
                    <p className="big value-prop">
                        Digital product designer, sometimes frontend developer and (part-time) musician
                    </p>
                </div>
                <div className="bottom-content">
                    <div className="content-links">
                        <span className="section-title">Links</span>
                        <a href="mailto:leonardo.lanzinger@gmail.com">EMAIL <img src={arrowUpRight}></img></a>
                        <a href="https://www.linkedin.com/in/leonardolanzinger/">LINKEDIN <img src={arrowUpRight}></img></a>
                        <a href="https://www.twitter.com/leo_lanzinger">TWITTER <img src={arrowUpRight}></img></a>
                        <a href="https://adplist.org/mentors/leonardo-lanzinger">ADPLIST <img src={arrowUpRight}></img></a>
                        <a href="https://github.com/leolanzinger">GITHUB <img src={arrowUpRight}></img></a>
                    </div>
                    <div className="content-paragraphs">
                        <span className="section-title">About</span>
                        <p className="small">
                            Over the past 7 years, I worked at Zalando and Babbel on strategic and product development projects.</p>
                        <p className="small">
                            Following user centric best practices, I help teams discover unknown opportunities to design meaningful, usable and delightful user experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="portfolio-column">
                    <Portfolio
                        title="Zalando Recommerce"
                        timeline="2021 — 2023"
                        content="ux design, user research, team enablement"
                        role="principal product designer"
                        theme="light"
                        image={recommerce}
                    />
                    <Portfolio
                        title="The Studio at Zalando"
                        timeline="2017 — 2021"
                        content="ux design, design strategy, design ops, prototyping"
                        role="senior product designer / creative technologist"
                        theme="dark"
                        image={thestudio}
                    />
                </div>
                <div className="portfolio-column">
                    <Portfolio
                        title="Babbel"
                        timeline="2017"
                        content="ux design, user testing, master thesis"
                        role="interaction design intern"
                        theme="light"
                        image={babbel}
                    />
                    <Portfolio
                        title="Never Offline"
                        timeline="2022"
                        content="content design, web design, visual branding"
                        role="freelance designer"
                        theme="light"
                        image={neverOffline}
                    />
                </div>
            </div>
        </main>
    )
}