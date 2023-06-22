import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.div
            className="footer contacts-container"
            initial={{ opacity: 0, paddingTop: '80px'}}
            animate={{ opacity: 1, paddingTop: '0px'}}
            exit={{ opacity: 0, paddingTop: '80px'}}
            transition={{ duration: 0.2 }}>
            <section className="contacts-section">
                <div>
                    <p className="medium">I am open for full-time or freelance product design work, remote or based in Berlin, Germany.</p>
                    <p className="medium">I also offer design mentorship sessions (for free) on ADPList. And I occasionally mumble about design topics on LinkedIn and Twitter.</p>
                    {/* <p>What I can support your organization with:</p>
                    <ul>
                        <li>Planning and managing design projects</li>
                        <li>Planning and leading qualitative user research activities</li>
                        <li>UX design — from concept to hi-fidelity</li>
                        <li>User testing (concept or usability testing)</li>
                        <li>Establishing design ways of working and growing design maturity</li>
                    </ul> */}
                </div>
                <div className="cta-container">
                    <button className="primary"><a href="mailto:leonardo.lanzinger@gmail.com">LET'S TALK!</a></button>
                </div>
            </section>
        </motion.div>
    )
}
