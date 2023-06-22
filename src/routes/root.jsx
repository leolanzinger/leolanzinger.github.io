import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/header"

export default function Root() {
    return (
        <main className="main__container">
            <Header page="home" />
            <motion.div
                className="container"
                initial={{ opacity: 0, paddingTop: '80px'}}
                animate={{ opacity: 1, paddingTop: '0px'}}
                exit={{ opacity: 0, paddingTop: '80px'}}
                transition={{ duration: 0.4 }}
            >
                <div className="column-main">
                    <p className="big">
                        A digital product designer, former creative technologist and aspiring design strategist.
                    </p>
                    <p className="big">
                        Following user-centric design best practices, I help organisations uncover unknown opportunities and design customer experiences that are usable, useful and delightful.
                    </p>
                </div>
                <motion.div
                    className="column-description-wrapper"
                    initial={{ opacity: 0, paddingTop: '80px'}}
                    animate={{ opacity: 1, paddingTop: '0px'}}
                    exit={{ opacity: 0, paddingTop: '80px'}}
                    transition={{ duration: 0.4 }}
                >
                    <div className="divider"></div>
                    <div className="column-description">
                        <p>
                            I worked for the past five years at <a href="https://www.zalando.de">Zalando</a>, most recently designing the circular second-hand proposition for its 50 million customers. Before that: I was a redesigned a voice recording tool at <a href="https://www.babbel.com">Babbel</a> and I studied Human-Computer Interaction Design and Computer Science in Berlin, Paris and Trento, Italy.
                        </p>
                        <p>
                            I’m currently open to work: feel free to <a href="mailto:leonardo.lanzinger@gmail.com">send me an email</a>, or reach out via <a href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a> or <a href="https://www.twitter.com/leo_lanzinger">Twitter</a>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>  
        </main>
    )
}