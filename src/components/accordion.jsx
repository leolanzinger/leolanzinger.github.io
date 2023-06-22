import React, { useState } from 'react'
import chevron from "../assets/chevron_down.svg"
import { AnimatePresence, motion } from "framer-motion"

const AccordionItem = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  };

  return (
    <div className={isExpanded ? "active accordion" : "accordion"}>
      <div className="accordion-title">
        <h2>{title}</h2>
        <div className="chevron-click-area" onClick={toggleAccordion}>
          <img className="chevron" src={chevron} />
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
              className="accordion-content"
              initial={{ height: '0px', opacity: '0%' }}
              animate={{ height: 'auto', opacity: '100%' }}
              exit={{ height: '0px', opacity: '0%' }}
              transition={{ duration: 0.2}}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ children }) => {
    return <div>{children}</div>
  };
  
export { Accordion, AccordionItem }