import React, { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion, LayoutGroup } from "framer-motion"
import {isDesktop, isMobile} from 'react-device-detect';

import Portfolio from "../components/portfolio"
import ProjectChat from "../components/projectChat"
import profilePic from "../assets/profile_pic.jpg"
import backArrow from "../assets/back_arrow_black.svg"
import crossIcon from "../assets/cross_icon.svg"
import recommerce from "../assets/recommerce_desktop.jpg"
import thestudio from "../assets/thestudio_desktop.jpg"
import babbel from "../assets/babbel_desktop.png"
import neverOffline from "../assets/never-offline-desktop.jpg"

export default function Root() {

    const [portfolioOpen, setPortfolioOpen] = useState(false)
    const [portfolioInfo, setPortfolioInfo] = useState({state: false, position: 0})
    const [minutes, setMinutes] = useState(0);
    const [minuteString, setMinuteString] = useState("Now");
    const [showSecondChat, setshowSecondChat] = useState(false);
    const [showFooter, setshowFooter] = useState(false);
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const chatAnswerRef = useRef(null);
    const portfolioRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.open("mailto:leonardo.lanzinger@gmail.com?subject=inquiry from leolanzinger.com&body=" + inputValue, '_blank');
    };

    const handlePortfolioOpen = () => {
        const portfolioInterval = setTimeout(() => {
            if (portfolioRef) {
                portfolioRef.current.scrollIntoView({ behavior: 'smooth'});
            }
        }, 400);
        return () => {
            clearInterval(portfolioInterval);
        }
    }

    const handlePortfolioInfoCallback = (pos) => {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
        if (!portfolioInfo.state) {
            setPortfolioInfo({state: true, position: pos})
        }
        else {
            if (pos == portfolioInfo.position)
                setPortfolioInfo({state: false, position: pos})
            else
            setPortfolioInfo({state: true, position: pos})
        }
    }

    useEffect(() => {
        const minuteInterval = setInterval(() => {
            setMinutes(prevMinutes => prevMinutes + 1);
            setMinuteString((minutes + 1) + " minute ago");
          }, 60000);
        const secondChatTimeoutId = setTimeout(() => {
            setshowSecondChat(true);
        }, 4400);
        const mobileFocusTimeoutId = setTimeout(() => {
            chatAnswerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});
        }, 4800);
        const footerTimeoutId = setTimeout(() => {
            setshowFooter(true);
            if (inputRef.current && isDesktop) {
                inputRef.current.focus();
            }
        }, 8000);
        return () => {
            clearTimeout(secondChatTimeoutId);
            clearTimeout(footerTimeoutId);
            clearInterval(minuteInterval);
            clearInterval(mobileFocusTimeoutId);
        };
    }, []);

    return (
        <main className="main__container">
            <LayoutGroup>
                <motion.div
                    layout="position"
                    className="chat-container"
                    style={{justifyContent: portfolioOpen ? "flex-end" : "center"}}>
                    <motion.div
                        layout="position"
                        className="chat-block">
                        <motion.div
                            className="chat-bubble"
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.4, delay: 0.8}}>
                            Hi there, my name is Leo. I am a senior digital product designer and creative technologist.
                        </motion.div>
                        <motion.div
                            className="chat-bubble"
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.4, delay: 1.6}}>
                            Over the past 7 years, I worked at <a href="https://www.zalando.de">Zalando</a> and <a href="https://www.babbel.com">Babbel</a> on strategic and product development projects.
                        </motion.div>
                        <motion.div
                            className="chat-bubble"
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.4, delay: 2.4}}>
                            I run discovery projects to uncover new opportunities to design meaningful, usable and delightful digital user experiences.
                        </motion.div>
                        <motion.div
                            className="chat-avatar-container"
                            layout="position"
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.4, delay: 2.8}}>
                            <img src={profilePic} alt="Picture of Leonardo Lanzinger" className="chat-author"></img>
                            {minuteString}
                        </motion.div>
                    </motion.div>
                    {
                        showSecondChat && 
                        <motion.div
                        layout="position"
                        className="chat-block">
                            <motion.div
                                className="chat-bubble"
                                initial={{ opacity: '0%'}}
                                animate={{ opacity: '100%'}}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 0.8}}>
                                In my career I worked on a variety of topics, from designing B2C experiences to improving tools for professional users. I have written about <a href="https://medium.com/zalando-design/zalandos-design-system-contribution-model-73ab36f8591e">design systems and their governance</a> and I share my experience with others as a mentor on <a href="https://adplist.org/mentors/leonardo-lanzinger">ADP List</a>.
                            </motion.div>
                            <motion.div
                                className="chat-bubble"
                                initial={{ opacity: '0%'}}
                                animate={{ opacity: '100%'}}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 1.6}}>
                                You can read more about my work <a onClick={ () => {{setPortfolioOpen(true)}; handlePortfolioOpen()}}>here</a>. Due to the nature of my previous employment, I can not share more details about my past projects here. But (in private) I am very happy to walk you through my design process, so don’t hesitate to reach out. :)
                            </motion.div>
                            <motion.div
                                className="chat-bubble"
                                initial={{ opacity: '0%'}}
                                animate={{ opacity: '100%'}}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 2.4}}>
                                I am currently open to work — if you feel like my profile is what you are looking for, let me know!
                            </motion.div>
                            <motion.div
                                className="chat-avatar-container"
                                initial={{ opacity: '0%'}}
                                animate={{ opacity: '100%'}}
                                transition={{ ease: "easeIn", duration: 0.4, delay: 2.8}}>
                                <img src={profilePic} alt="Picture of Leonardo Lanzinger" className="chat-author"></img>
                                {minuteString}
                            </motion.div>
                        </motion.div>
                        }
                        {
                        showSecondChat && 
                        <motion.div
                            ref={chatAnswerRef}
                            layout="position">
                            <motion.div
                                className="chat-answer"
                                initial={{ opacity: '0%'}}
                                animate={{ opacity: '100%'}}
                                transition={{ ease: "easeIn", duration: 0.2, delay: 3.2}}>
                                    <form
                                        autoComplete="off"
                                        ref={formRef}
                                        onSubmit={handleSubmit}>
                                        <input autoComplete="false" ref={inputRef} type="text" id="reply" placeholder="Write a reply..." value={inputValue} onChange={handleInputChange} />
                                        <button type="submit">
                                            <img src={backArrow} alt="Arrow icon"></img>
                                        </button>
                                    </form>
                            </motion.div>
                        </motion.div>
                    }
                    <AnimatePresence>
                    {
                        portfolioOpen &&
                        <motion.div
                            className="portfolio-wrapper"
                            ref={portfolioRef}
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            exit={{ opacity: '0%'}}
                            transition={{ ease: "easeIn", duration: 0.4}}>
                            <motion.img
                                layout="position"
                                className="close-icon"
                                alt="Close icon"
                                onClick={() => {
                                    if (portfolioInfo.state) {
                                        setPortfolioInfo({state: false, position: 0})
                                    }
                                    else {
                                        setPortfolioOpen(false);
                                        setPortfolioInfo({state: false, position: 0})
                                    }
                                }}
                                src={crossIcon}>
                            </motion.img>
                            <div className={portfolioInfo.state ? "portfolio-container expanded" : "portfolio-container"}>
                                {
                                    (!portfolioInfo.state ||
                                    (portfolioInfo.state &&
                                    portfolioInfo.position == 0)) &&
                                    <AnimatePresence>
                                        <Portfolio
                                            toggleInfo={handlePortfolioInfoCallback}
                                            position={0}
                                            title="Zalando Recommerce"
                                            timeline="2021 — 2023"
                                            content="ux design, user research, team enablement"
                                            role="Principal product designer"
                                            theme="light"
                                            popup={true}
                                            image={recommerce}
                                        />
                                    </AnimatePresence>
                                }
                                {
                                    (!portfolioInfo.state ||
                                    (portfolioInfo.state &&
                                    portfolioInfo.position == 1)) &&
                                    <AnimatePresence><Portfolio
                                    toggleInfo={handlePortfolioInfoCallback}
                                    position={1}
                                    title="The Studio at Zalando"
                                    timeline="2017 — 2021"
                                    content="ux design, design strategy, design ops, prototyping"
                                    role="Senior product designer / Creative technologist"
                                    theme="dark"
                                    popup={true}
                                    image={thestudio}
                                    /></AnimatePresence>
                                }
                                {
                                    (!portfolioInfo.state ||
                                    (portfolioInfo.state &&
                                    portfolioInfo.position == 2)) &&
                                    <AnimatePresence><Portfolio
                                    toggleInfo={handlePortfolioInfoCallback}
                                        position={2}
                                        title="Babbel"
                                        timeline="2017"
                                        content="ux design, user testing, master thesis"
                                        role="Interaction design intern"
                                        theme="light"
                                        popup={false}
                                        image={babbel}
                                    /></AnimatePresence>
                                }
                                {
                                    (!portfolioInfo.state ||
                                    (portfolioInfo.state &&
                                    portfolioInfo.position == 3)) &&
                                    <AnimatePresence><Portfolio
                                    toggleInfo={handlePortfolioInfoCallback}
                                        position={3}
                                        title="Never Offline"
                                        timeline="2022"
                                        content="content design, web design, visual branding"
                                        role="Freelance designer"
                                        theme="light"
                                        popup={false}
                                        image={neverOffline}
                                    /></AnimatePresence>
                                }
                                <AnimatePresence>
                                {
                                    portfolioInfo.state && <AnimatePresence><ProjectChat position={portfolioInfo.position} /></AnimatePresence>
                                }
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                </motion.div>
                {
                    showFooter &&
                    isDesktop &&
                    <footer>
                        <motion.div 
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.6}}className="links">
                            <a onClick={ () => setPortfolioOpen(!portfolioOpen)}>WORK</a>
                            <a href="https://read.cv/leolanzinger">RESUME</a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: '0%'}}
                            animate={{ opacity: '100%'}}
                            transition={{ ease: "easeIn", duration: 0.6}}
                            className="contacts">
                            <a href="mailto:leonardo.lanzinger@gmail.com">EMAIL</a>
                            <a href="https://www.linkedin.com/in/leonardolanzinger/">LINKEDIN</a>
                            <a href="https://www.twitter.com/leo_lanzinger">TWITTER</a>
                            <a href="https://adplist.org/mentors/leonardo-lanzinger">ADPLIST</a>
                        </motion.div>
                    </footer>
                }
            </LayoutGroup>
        </main>
    )
}