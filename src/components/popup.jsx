import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimate } from "framer-motion"
import arrowUpRight from "../assets/arrow-up-right.svg"

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

const Popup = ({ title, togglePopup }) => {
    return (
        <motion.div
            className="popup-container"
            key="popup-shade"
            onClick={() => togglePopup(false)}
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
                    <h1>{title}</h1>
                    <ul>
                    {
                        title == "Zalando Recommerce" &&
                        recommerceProjects.map((project) => 
                            <li key={project}><p className="small">{project}</p></li>
                        )
                    }
                    {
                        title == "The Studio at Zalando" &&
                        studioProjects.map((project) => 
                            <li key={project}><p className="small">{project}</p></li>
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
    )
}

export default Popup
