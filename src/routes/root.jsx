import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import HeroImg from "../assets/hero_img.png"

export default function Root() {
    return (
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="root home">
                <div className="intro-header">
                    <img className="hero-image" src={HeroImg} alt="leonardo lanzinger illustration" />
                    <span className="name">
                        Leonardo Lanzinger
                    </span>
                    <div className="intro-links-wrapper">
                        <div className="intro-services">
                            <span className="services">Product design</span>
                            <span className="services">Product strategy</span>
                            <span className="services">User research</span>
                            <span className="services">Music & code</span>
                        </div>
                        <div className="links mobile-only">
                            <Link to={`work`}>Work</Link>
                            <Link to={`/about`}>About</Link>
                            <Link to={`/contacts`}>Contacts</Link>
                        </div>
                    </div>
                </div>
                <div className="intro-body">
                    <p>
                    Italian born, Berlin based digital designer and technologist with a focus on user research and design strategy. Worked for the past five years at Zalando, focusing on the circular second-hand proposition for its 50 million customers.
                    </p>
                    <p>
                    Graduated in Computer Science and Human-Computer Interaction Design from TU Berlin and UPS Paris.
                    </p>
                    <p>
                    Currently open to work on projects with a focus on sustainability, circular business models or novel interaction patterns such as AI or VR.
                    </p>
                    <div className="desktop-only body-links-wrapper">
                        <div className="desktop-only body-links">
                            <Link to={`work`}>Work</Link>
                            <Link to={`/about`}>About</Link>
                        </div>
                        <div className="desktop-only body-links">
                            <a href="mailto:leonardo.lanzinger@gmail.com">Email</a>
                            <a href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a>
                            <a href="https://www.twitter.com/leo_lanzinger">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}