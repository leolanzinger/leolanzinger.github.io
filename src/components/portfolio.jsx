import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimate } from "framer-motion"

const Portfolio = ({ title, position, image, toggleInfo }) => {

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
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}>
            <div
                transition={{ duration: 0.4 }}
                className="portfolio-item"
                style={{ backgroundImage : `url(${image})`}}
                onClick={() => {handleInfoClick()}}
                >
            </div>
            <span layout="position" className={hover ? "portfolio-title open" : "portfolio-title"}>{title}</span>
            </motion.div>
        </motion.div>
    )
}

export default Portfolio
