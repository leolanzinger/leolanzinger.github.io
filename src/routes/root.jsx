import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Portfolio from "../components/portfolio"
import arrowUpRight from "../assets/arrow-up-right.svg"
import recommerce from "../assets/recommerce_desktop.jpg"
import thestudio from "../assets/thestudio_desktop.jpg"
import babbel from "../assets/babbel_desktop.png"
import neverOffline from "../assets/never-offline-desktop.jpg"

const recommerceProjects = [
    "Helped the team define its product roadmap by running discovery and evaluative user research and facilitating service design workshops.",
    "Improved the overall user experience of customers who buy second hand clothes on Zalando.",
    "Researched and designed the user experience for customers who want to recycle unwearable clothes with Zalando.",
    "Redesigned the user journey for customers who want to sell their second hand clothes on Zalando, to reduce operational costs of Zalando Recommerce.",
    "Designed the user journey for designer fashion enthusiast to shop second hand on Zalando."
]

const studioProjects = [
    "Helped Zalando conneted retailers become sources of inspiration and advice for Zalando customers.",
    "Explored how Zalando could become a local player in customers' neighbourhoods.",
    "Visualised the future partnership between Zalando and Nike.",
    "Experimented with interface composition rules to provide a dynamic experience on Zalando home.",
    "Helped Zalando define its sustainability customer value proposition.",
    "Designed the Zalando community design methods toolkit, a Zalando Figma Plugin and the design system governance model."
]


export default function Root() {

    const [open, setPopupOpen] = useState(false)
    const [popupTitle, setPopupTitle] = useState("")

    const handlePopupCallback = (state, title) => {
        setPopupOpen(state)
        setPopupTitle(title)
    }

    return (
        <main className={open ? "main__container non-scrollable" : "main__container"}>
            <AnimatePresence>
                {open &&
                        <motion.div
                            className="popup-container"
                            key="popup-shade"
                            onClick={() => setPopupOpen(false)}
                            initial={{ opacity: '0%' }}
                            animate={{ opacity: '100%' }}
                            exit={{ opacity: '0%' }}>
                                    <motion.div
                                        key="popup-panel"
                                        className="popup-panel"
                                        initial={{ bottom: '-100%' }}
                                        animate={{ bottom: '-1%' }}
                                        exit={{ bottom: '-100%' }}
                                        transition={{ ease: "easeOut", duration: 0.4}}
                                    >
                                        <div className="projects">
                                            <h1>{popupTitle}, projects:</h1>
                                            <ul>
                                            {
                                                popupTitle == "Zalando Recommerce" &&
                                                recommerceProjects.map((project) => 
                                                    <li><p className="small">{project}</p></li>
                                                )
                                            }
                                            {
                                                popupTitle == "The Studio at Zalando" &&
                                                studioProjects.map((project) => 
                                                    <li><p className="small">{project}</p></li>
                                                )
                                            }
                                            </ul>
                                        </div>
                                        <p className="small">
                                            I am happy to share with you some more details and case studies from my past work via email. Feel free to contact me and request them.
                                        </p>
                                        <a className="link-popup" href="mailto:leonardo.lanzinger@gmail.com">EMAIL <img src={arrowUpRight}></img></a>
                                    </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>
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
                        togglePopupMessage={handlePopupCallback}
                        title="Zalando Recommerce"
                        timeline="2021 — 2023"
                        content="ux design, user research, team enablement"
                        role="principal product designer"
                        theme="light"
                        popup={true}
                        image={recommerce}
                    />
                    <Portfolio
                        togglePopupMessage={handlePopupCallback}
                        title="The Studio at Zalando"
                        timeline="2017 — 2021"
                        content="ux design, design strategy, design ops, prototyping"
                        role="senior product designer / creative technologist"
                        theme="dark"
                        popup={true}
                        image={thestudio}
                    />
                </div>
                <div className="portfolio-column">
                    <Portfolio
                        togglePopupMessage={handlePopupCallback}
                        title="Babbel"
                        timeline="2017"
                        content="ux design, user testing, master thesis"
                        role="interaction design intern"
                        theme="light"
                        popup={false}
                        image={babbel}
                    />
                    <Portfolio
                        togglePopupMessage={handlePopupCallback}
                        title="Never Offline"
                        timeline="2022"
                        content="content design, web design, visual branding"
                        role="freelance designer"
                        theme="light"
                        popup={false}
                        image={neverOffline}
                    />
                </div>
            </div>
        </main>
    )
}