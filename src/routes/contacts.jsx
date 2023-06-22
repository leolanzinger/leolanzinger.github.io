import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import backArrowBlack from "../assets/back_arrow_black.svg"

export default function Contacts() {
    return (
        <main className="contacts__container">
            <header className="contacts">
                <p className="name"><Link to={`/`}>Leonardo Lanzinger</Link></p>
                <div>
                    <div style={{"display" : 'flex', 'flexDirection' : 'row', 'flexWrap': 'wrap', 'alignItems': 'center'}}>
                        <button className="work"><Link to={`/work`}>WORK</Link></button>
                        <button className="about"><Link to={`/about`}>ABOUT</Link></button>
                        <button className="contacts active"><Link>CONTACTS</Link></button>
                    </div>
                </div>
            </header>
            <motion.div
                className="root contacts"
                key="about-content"
                initial={{ paddingTop: '80px' }}
                animate={{ paddingTop: '0px' }}
                exit={{ opacity: '0', paddingTop: '180px'  }}
                transition={{ duration: 0.2}}
            >
                <div className="contacts-container">
                    <section className="contacts-section">
                        <div>
                            <p className="medium">I am open for full-time or freelance product design work, remote or based in Berlin, DE.</p>
                            <p className="medium">I also offer design mentorship sessions (for free) on ADPList. And I occasionally mumble about design topics on LinkedIn and Twitter.</p>
                            <p>What I can support your organization with:</p>
                            <ul>
                                <li>Planning and managing design projects</li>
                                <li>Planning and leading qualitative user research activities</li>
                                <li>UX design — from concept to hi-fidelity</li>
                                <li>User testing (concept or usability testing)</li>
                                <li>Establishing design ways of working and growing design maturity</li>
                            </ul>
                            <div className="divider"></div>
                        </div>
                        <div>
                            <p className="medium">Let's get in touch!</p>
                            <a className="medium" href="mailto:leonardo.lanzinger@gmail.com">Email</a>
                            <a className="medium" href="https://www.linkedin.com/in/leonardolanzinger/">LinkedIn</a>
                            <a className="medium" href="https://www.twitter.com/leo_lanzinger">Twitter</a>
                            <a className="medium" href="https://adplist.org/mentors/leonardo-lanzinger">ADPList</a>
                        </div>
                    </section>
                </div>
            </motion.div>
        </main>
    )
}