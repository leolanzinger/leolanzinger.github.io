import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useAnimate } from "framer-motion"
import chevron from "../assets/chevron_right.svg"
import closeButton from "../assets/close_button.svg"

const Header = ({ page }) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const [linksTransitionTime, setLinksTransitionTime] = useState(0)

    const toogleHeader = () => {
        setIsExpanded(!isExpanded)
    };
    

    return (
        <header className={page}>
            <p className="name"><Link to={`/`}>Leonardo Lanzinger</Link></p>
            <div className="links">
                {
                    <AnimatePresence mode="wait">
                        {!isExpanded &&
                            <motion.div
                                key="page-links"
                                className="header-link-wrapper page-links"
                                initial={{ opacity: '0%' }}
                                animate={{ opacity: '100%' }}
                                exit={{ opacity: '0%' }}
                                transition={{ duration: linksTransitionTime}}
                            >
                                <button className={page == "work" ? "work active" : "work"}><Link to={page == "work" ? "" : "/work"}>WORK</Link></button>
                                <button className={page == "about" ? "about active" : "about"}><Link to={page == "about" ? "" : "/about"}>ABOUT</Link></button>
                                <button className={page == "home" ? "primary" : "contacts"}><Link onClick={toogleHeader}>CONTACTS</Link></button>
                            </motion.div>
                        }
                    </AnimatePresence>
                }
                {
                    <AnimatePresence>
                        {isExpanded &&
                        <div>
                            <motion.div
                                key="contact-links-desktop"
                                className="header-link-wrapper contact-links desktop-only"
                                initial={{ right: '-400px' }}
                                animate={{ right: '24px' }}
                                exit={{ right: '-400px', opacity: '0' }}
                                transition={{ duration: 0.2}}
                            >
                                <button><a href="mailto:leonardo.lanzinger@gmail.com">leonardo.lanzinger@gmail.com</a></button>
                                <button><a className="medium" href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a></button>
                                <button><a className="medium" href="https://www.twitter.com/leo_lanzinger">Twitter</a></button>
                                <button><a className="medium" href="https://adplist.org/mentors/leonardo-lanzinger">ADPList</a></button>
                                <img onClick={toogleHeader} className="close-chevron" src={chevron} />
                            </motion.div>
                            <motion.div
                                key="contact-links-mobile"
                                className="header-link-wrapper-expanded contact-links mobile-only"
                                initial={{ height: '0px' }}
                                animate={{ height: 'auto' }}
                                exit={{ height: '0px', opacity: '0' }}
                                transition={{ duration: 0.2}}
                            >
                                <div className="close-button-wrapper">
                                    <img onClick={toogleHeader} className="close-button" src={closeButton} />
                                </div>
                                <button><a href="mailto:leonardo.lanzinger@gmail.com">leonardo.lanzinger@gmail.com</a></button>
                                <button><a className="medium" href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a></button>
                                <button><a className="medium" href="https://www.twitter.com/leo_lanzinger">Twitter</a></button>
                                <button><a className="medium" href="https://adplist.org/mentors/leonardo-lanzinger">ADPList</a></button>
                            </motion.div>
                        </div>}
                    </AnimatePresence>
                }
            </div>
        </header>
    )
}

export default Header;