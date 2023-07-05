import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimate } from "framer-motion"
import plusIconLight from "../assets/plus-icon-light.svg"
import plusIconDark from "../assets/plus-icon-dark.svg"
import linkExternalIconLight from "../assets/link-external-light.svg"

const Portfolio = ({ title, role, timeline, content, image, theme, togglePopupMessage }) => {

    const [open, setOpen] = useState(false)
    const [scope, animate] = useAnimate()

    const handleCloseClick = () => {
        setOpen(!open)
    }

    const handleInfoClick = () => {
        togglePopupMessage(true)
    }

    useEffect(() => {
        if (open) {
            console.log("rotate")
            animate(scope.current, { rotate: "45deg" })
        }
        else if (!open) {
            console.log("rotate back")
            animate(scope.current, { rotate: "0" })
        }
    }, [open])

    return (
        <div className="portfolio-item" style={{ backgroundImage : `url(${image})`}}>
            <img
                ref={scope}
                className={open ? "plus-icon open-icon" : "plus-icon"}
                src={theme == "light" ? plusIconLight : plusIconDark}
                onClick={handleCloseClick} />
            <AnimatePresence>
            {
                open &&
                <motion.div
                    className="portfolio-panel"
                    key="portfolio-item"
                    initial={{ marginBottom: '-166.39px' }}
                    animate={{ marginBottom: '0px' }}
                    exit={{ marginBottom: '-166.39px' }}>
                    <span className="portfolio-title">{title}</span>
                    <p>{role}</p>
                    <p>{timeline}</p>
                    <div className="portfolio-panel-bottom">
                        <span className="portfolio-content">{content}</span>
                        <img
                            src={linkExternalIconLight}
                            className="open-popup"
                            onClick={handleInfoClick}
                        />
                    </div>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

export default Portfolio
