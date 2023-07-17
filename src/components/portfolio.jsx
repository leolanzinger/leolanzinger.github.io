import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimate } from "framer-motion"

const Portfolio = ({ title, position, role, timeline, content, image, theme, togglePopupMessage, popup, toggleInfo }) => {

    const [hover, setHover] = useState(false)
    const [open, setOpen] = useState(false)

    const handleInfoClick = () => {
        setOpen(!open)
        toggleInfo(position)
    }

    return (
        <motion.div
            initial={{ opacity: '0%'}}
            animate={{ opacity: '100%'}}
            exit={{ opacity: '0%'}}
            transition={{ ease: "easeIn", duration: 0.2}}
            className="portfolio-item-frame">
            <motion.div
                layout="position"
                transition={{ duration: 0.4 }}
                className="portfolio-item"
                style={{ backgroundImage : `url(${image})`}}
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}
                onClick={() => {handleInfoClick()}}
                >
            </motion.div>
            {
                open ?
                <span className="portfolio-title expanded">{title}</span>
                :
                <span className={hover ? "portfolio-title open" : "portfolio-title"}>{title}</span>

            }
        </motion.div>
    )
}

export default Portfolio
