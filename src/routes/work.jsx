import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import backArrow from "../assets/back_arrow.svg"
import recommerceImage from "../assets/recommerce.png"
import theStudioImage from "../assets/thestudio.png"
import babbelImage from "../assets/babbel.png"

export default function Work() {
    return (
        <motion.main
            className="work__container"
            initial={{ backgroundColor: '#FEFEFE', paddingTop: '600px' }}
            animate={{ backgroundColor: '#111', paddingTop: '0px' }}
            exit={{ opacity: 0, paddingTop: '300px' }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="root work"
                key="work-content"
                initial={{ gap: '380px' }}
                animate={{ gap: '40px' }}
                exit={{ opacity: 0, gap: '380px' }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                <div className="work-intro">
                    <Link to={`/`}><img src={backArrow} alt="back-arrow" className="back-arrow" /></Link>
                    <h1>Work</h1>
                    <p>Below is a quick summary of my main work contributions so far as a product designer at Zalando and Babbel.</p>
                </div>
                <div className="work-content">
                    <section className="client">
                        <div className="client-intro">
                            <h2>Recommerce at Zalando</h2>
                            <h3>Principal product designer</h3>
                            <h3>2021 - 2023</h3>
                        </div>
                        <div className="client-content">
                            <img className="client-image" src={recommerceImage} alt="Recommerce at Zalando" />
                            <p>As Principal Product Designer, I was responsible for the customer experience of Zalando customers who shop and sell second-hand fashion, as well as the experience of customers using Zalando for recycling their old unwearable clothes.</p>
                            <p>Led projects include: leading user research to identify strategic opportunities in the overall customer journey, product design work on new second-hand reselling and recycling services and workshops facilitation.</p>
                        </div>
                    </section>
                    <section className="client">
                        <div className="client-intro">
                            <h2>The Studio at Zalando</h2>
                            <h3>(Junior to) senior product designer</h3>
                            <h3>2017 - 2021</h3>
                        </div>
                        <div className="client-content">
                            <img className="client-image" src={theStudioImage} alt="The Studio at Zalando" />
                            <p>Together with The Studio team, I explored different strategic topics including Zalando’s sustainability digital experience, connecting brick and mortar stores to the Zalando platform and visualising the partnership with Sephora and Nike.</p>
                            <p>Being a bit of a design process geek, I dived into design ops topics and managed the design community methods toolkit, designed the design system contribution model and developed a Figma plugin to help colleagues create prototypes faster. During a brief stint in the design system team, I also helped out as a front-end developer to develop the newly designed components.</p>
                        </div>
                    </section>
                    <section className="client">
                        <div className="client-intro">
                            <h2>Babbel</h2>
                            <h3>Interaction designer intern</h3>
                            <h3>2016</h3>
                        </div>
                        <div className="client-content">
                            <img className="client-image" src={babbelImage} alt="Babbel" />
                            <p>As an interaction designer intern, I redesigned the sound recording tool used by language experts to record audio material for Babbel online language courses, integrating it in a git-based CAT tool.</p>
                            <p>As part of this internship, I wrote a thesis on the effect of a redesigned interfaces on its usability for users with different system experience and domain expertise.</p>
                        </div>
                    </section>
                </div>
            </motion.div>
        </motion.main>
    )
}