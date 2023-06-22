import { useState } from 'react'
import { motion, useAnimate, AnimatePresence } from "framer-motion"
import recommerceImage from "../assets/recommerce.png"
import theStudioImage from "../assets/thestudio.png"
import babbelImage from "../assets/babbel.png"
import Header from "../components/header"
import chevron from "../assets/chevron_down_light.svg"

export default function Work() {
    const [background, animateBg] = useAnimate()
    const [work, animateWork] = useAnimate()
    const [recommerce, animateRecommerce] = useAnimate()
    const [studio, animateStudio] = useAnimate()
    const [recommerceExpanded, setRecommerceExpanded] = useState(false)
    const [studioExpanded, setStudioExpanded] = useState(false)
    const [babbelExpanded, setBabbelExpanded] = useState(false)

    const restoreBackground = () => {
        if (recommerceExpanded || studioExpanded || babbelExpanded) {

        }
        else {
            animateBg(background.current, {backgroundColor: "#111"}, {duration: 0.4}, { ease: "linear" })
        }
    }

    const displayRecommerce = () => {
        setRecommerceExpanded(!recommerceExpanded)
        setStudioExpanded(false)
        setBabbelExpanded(false)
        recommerceExpanded ? restoreBackground() : {}
    }
    const displayStudio = () => {
        setStudioExpanded(!studioExpanded)
        setRecommerceExpanded(false)
        setBabbelExpanded(false)
        studioExpanded ? restoreBackground() : {}
    }
    const displayBabbel = () => {
        setBabbelExpanded(!babbelExpanded)
        setRecommerceExpanded(false)
        setStudioExpanded(false)
        babbelExpanded ? restoreBackground() : {}
    }

    const previewRecommerce = () => {
        animateBg(background.current, {backgroundColor: "#040036"}, {duration: 0.4}, { ease: "linear" })
        // animateRecommerce(recommerce.current, {marginLeft: "20px"}, {duration: 0.4}, { ease: "linear" })
    }
    const previewStudio = () => {
        animateBg(background.current, {backgroundColor: "#690A00"}, {duration: 0.4}, { ease: "linear" })
        // animateStudio(studio.current, {marginLeft: "20px"}, {duration: 0.4}, { ease: "linear" })
    }
    const previewBabbel = () => {
        animateBg(background.current, {backgroundColor: "#a93400"}, {duration: 0.4}, { ease: "linear" })
        // animateWork("#babbel", {marginLeft: "20px"}, {duration: 0.4}, { ease: "linear" })
    }

    return (
        <motion.main
            className="work__container"
            ref={background}
            key="work-content"
            initial={{ backgroundColor: '#FEFEFE' }}
            animate={{ backgroundColor: '#111' }}
            exit={{ backgroundColor: '#FEFEFE' }}
            transition={{ duration: 0.4}}
        >
            <Header page="work" />
            <motion.div
                className="root work"
                key="work-content"
                initial={{ paddingTop: '80px' }}
                animate={{ paddingTop: '0px' }}
                exit={{ opacity: '0', paddingTop: '180px'  }}
                transition={{ duration: 0.2}}
            >
                <div className="work-container" ref={work}>
                    <div style={{cursor: "pointer"}} onClick={displayRecommerce} onMouseEnter={previewRecommerce} onMouseLeave={restoreBackground}>
                        <div className="work-item">
                            <motion.div id="recommerce" key="recommerce" ref={recommerce} className="work-item-name">
                                <p className="medium">Zalando Recommerce</p>
                                <p className="small-medium">Principal Product Designer</p>
                                <p className="small-medium mobile-only">2021 - 2023</p>
                            </motion.div>
                            <div className="work-item-caret">
                                <p className="medium desktop-only">2021 - 2023</p>
                                <img className={recommerceExpanded ? "chevron active" : "chevron"} src={chevron} />
                            </div>
                        </div>
                        <AnimatePresence>
                            {recommerceExpanded && (
                            <motion.div
                                className="work-content"
                                initial={{ height: '0px', opacity: '0%' }}
                                animate={{ height: 'auto', opacity: '100%' }}
                                exit={{ height: '0px', opacity: '0%' }}
                                transition={{ duration: 0.2}}>
                                <div className="work-content-text">
                                    <p>Recommerce is the team responsible for Zalando Pre-owned and Sell services, enabling customers to buy and sell second hand fashion. The service is available through the main Zalando app in all European markets, reaching a customer base of over 50 million people.</p>
                                    <p>Responsibilities:</p>
                                    <ul>
                                        <li>Design roadmap planning</li>
                                        <li>User research initiatives</li>
                                        <li>Conceptualisation and design of the new Recycle service</li>
                                        <li>UX design for both Sell and Pre-owned customer journeys</li>
                                        <li>Workshop moderation</li>
                                    </ul>
                                </div>
                                <div className="work-content-image">
                                    <img src={recommerceImage} alt="recommerce" />
                                </div>
                            </motion.div>)
                            }
                        </AnimatePresence>
                    </div>
                    <div className="divider light"></div>
                    <div style={{cursor: "pointer"}} onClick={displayStudio} onMouseEnter={previewStudio} onMouseLeave={restoreBackground}>
                        <div className="work-item">
                            <motion.div id="studio" key="studio" ref={studio} className="work-item-name">
                                <p className="medium">The Studio at Zalando</p>
                                <p className="small-medium">(Junior to) Senior Product Designer / Creative Technologist</p>
                                <p className="small-medium mobile-only">2017 - 2021</p>
                            </motion.div>
                            <div className="work-item-caret">
                                <p className="medium desktop-only">2017 - 2021</p>
                                <img className={studioExpanded ? "chevron active" : "chevron"} src={chevron} />
                            </div>
                        </div>
                        <AnimatePresence>
                            {studioExpanded && (
                            <motion.div
                                className="work-content"
                                initial={{ height: '0px', opacity: '0%' }}
                                animate={{ height: 'auto', opacity: '100%' }}
                                exit={{ height: '0px', opacity: '0%' }}
                                transition={{ duration: 0.2}}>
                                <div className="work-content-text">
                                    <p>The Studio is a multidisciplinary design team that supports Zalando teams on early stage projects with high ambiguity. Together with the team, I explored different strategic topics, including Zalando’s sustainability digital experience, connecting brick and mortar stores to the Zalando platform and visualising the partnership with Sephora and Nike.</p>
                                    <p>Being a bit of a design process geek, I enjoyed creating and managing the design community methods toolkit, designed the first iteration of the design system contribution model and developed a Figma plugin to help colleagues create prototypes faster.</p>
                                </div>
                                <div className="work-content-image">
                                    <img src={theStudioImage} alt="The Studio" />
                                </div>
                            </motion.div>)
                            }
                        </AnimatePresence>
                    </div>
                    <div className="divider light"></div>
                    <div style={{cursor: "pointer"}} onClick={displayBabbel} onMouseEnter={previewBabbel} onMouseLeave={restoreBackground}>
                        <div className="work-item">
                            <motion.div id="babbel" key="babbel" className="work-item-name">
                                <p className="medium">Babbel</p>
                                <p className="small-medium">Interaction Designer Intern</p>
                                <p className="small-medium mobile-only">2016</p>
                            </motion.div>
                            <div className="work-item-caret">
                                <p className="medium desktop-only">2016</p>
                                <img className={babbelExpanded ? "chevron active" : "chevron"} src={chevron} />
                            </div>
                        </div>
                        <AnimatePresence>
                            {babbelExpanded && (
                            <motion.div
                                className="work-content"
                                initial={{ height: '0px', opacity: '0%' }}
                                animate={{ height: 'auto', opacity: '100%' }}
                                exit={{ height: '0px', opacity: '0%' }}
                                transition={{ duration: 0.2}}>
                                <div className="work-content-text">
                                    <p>As an interaction designer intern, I redesigned the sound recording tool used by language experts to record audio material for Babbel online language courses, integrating it in a git-based CAT tool.</p>
                                    <p>As part of this internship, I wrote a thesis on the effect of a redesigned interfaces on its usability for users with different system experience and domain expertise.</p>
                                </div>
                                <div className="work-content-image">
                                    <img src={babbelImage} alt="Babbel" />
                                </div>
                            </motion.div>)
                            }
                        </AnimatePresence>
                    </div>
                    <div className="divider light"></div>
                </div>
                <motion.div
                    style={{maxWidth: "880px"}}
                    initial={{ opacity: 0, paddingTop: '80px'}}
                    animate={{ opacity: 1, paddingTop: '0px'}}
                    exit={{ opacity: 0, paddingTop: '80px'}}
                    transition={{ duration: 0.2 }}
                >
                    <p className="medium">I am open for full-time or freelance product design work, remote or based in Berlin, Germany.</p>
                    <p className="medium">I also offer design mentorship sessions (for free) on ADPList. And I occasionally mumble about design topics on LinkedIn and Twitter.</p>
                    <button style={{borderColor: "#FEFEFE", background: "transparent", marginTop: "24px"}} className="primary"><a href="mailto:leonardo.lanzinger@gmail.com">LET'S TALK!</a></button>
                </motion.div>
            </motion.div>
       </motion.main>
    )
}