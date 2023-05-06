import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import backArrow from "../assets/back_arrow.svg"

export default function Contacts() {
    return (
        <motion.main
            className="contacts__container"
            initial={{ backgroundColor: '#FEFEFE', paddingTop: '600px' }}
            animate={{ backgroundColor: '#505423', paddingTop: '0px' }}
            exit={{ opacity: 0, paddingTop: '300px' }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="root contacts"
                key="work-content"
                initial={{ gap: '380px' }}
                animate={{ gap: '40px' }}
                exit={{ opacity: 0, gap: '380px' }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                <Link to={`/`}><img src={backArrow} alt="back-arrow" className="back-arrow" /></Link>
                <h1>Contacts</h1>
                <section className="contacts-section">
                    <p>Reach out at <a href="mailto:leonardo.lanzinger@gmail.com">leonardo.lanzinger@gmail.com</a></p>
                </section>
                <section className="contacts-section">
                    <p>Or let’s get it touch via</p>
                    <a href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a>
                    <a href="https://www.twitter.com/leo_lanzinger">Twitter</a>
                </section>
            </motion.div>
        </motion.main>
    )
}