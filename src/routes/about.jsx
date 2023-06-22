import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Accordion, AccordionItem }  from "../components/accordion"
import Footer from "../components/footer"
import Header from "../components/header"
import porfilePic from "../assets/profile_pic.jpg"

export default function About() {
    return (
        <main className="about__container">
            <Header page="about" />
            <motion.div
                className="root about"
                key="about-content"
                initial={{ paddingTop: '80px' }}
                animate={{ paddingTop: '0px' }}
                exit={{ opacity: '0', paddingTop: '180px'  }}
                transition={{ duration: 0.2}}
            >
                <div className="about-container">
                    <section className="about-section">
                        <p className="medium">I am a Product Designer with a passion for tackling complex challenges through user centricity. I have a fond interest in circular design, in having a positive impact on people and the planet through the design practice and in enabling teams to be more user centric by sharing design tools and methods.</p>
                        <Accordion>
                            <AccordionItem title="CAREER">
                                <p>While studying Computer Science at University of Trento, I started my career as a front-end developer, working mostly on websites and Android apps. Afterwards, I moved on to a attend a master in Human Computer Interaction and wrote a thesis on a gesture based music controller implemented on a Leap Motion device.</p>
                                <p>After my studies, I joined Zalando — an online fashion e-commerce platform based in Berlin — as a Creative Technologist for The Studio, a design unit working on early stage projects. While there, I transitioned into a Product Design role, mostly focusing on discovery and idea conceptualisation. In 2021 I joined the Recommerce team as an embedded product designer, following the entire product development life-cycle.</p>
                                <p>As a Senior and then Principal Product Designer at Zalando, I led several projects with cross-functions stakeholders and broad scope. At the same time, I managed a few Design Ops acitvities, such as the design community methods toolkit, an in-house Figma plugin and worked on the contribution model of Zalando design system.</p>
                            </AccordionItem>
                            <AccordionItem title="APPROACH">
                                <p>I am a Product Designer with a passion for tackling complex challenges through user centricity. I have a fond interest in circular design, in having a positive impact on people and the planet through the design practice and in enabling teams to be more user centric by sharing design tools and methods.</p>
                                <p>I have experience both researching and designing innovative solutions for unmet customer needs, as well as developing the customer experience of established products.</p>
                                <p>My design process revolves around the so-called “double diamond” approach, but I value flexibility and also preach the “know the rules, break the rules” motto: that is, mastering frameworks and tools means to remain flexible, humble and always be ready to adapt to different contexts, teams and objectives. Long story short? I believe knowledge is adaptability — and so is the design process.</p>
                                <p>How I can support your organization or project:</p>
                                <ul>
                                    <li>Planning and managing design projects</li>
                                    <li>Planning and leading qualitative user research activities</li>
                                    <li>UX design — from concept to hi-fidelity</li>
                                    <li>User testing (concept or usability testing)</li>
                                    <li>Establishing design ways of working and growing design maturity</li>
                                </ul> 
                                <p><a href="mailto:leonardo.lanzinger@gmail.com">Drop me a line</a> if you think my profile fits what you are looking for!</p>
                            </AccordionItem>
                            <AccordionItem title="MUSIC & CODE">
                                <p>Beside work, I spend a lot of time playing and producing music with two projects: <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme?si=xBxP01xlRvOsKEW8bY7O2g&nd=1" target="_blank">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU?si=N_g3ZnxfQW-tQ3TILesGww&nd=1" target="_blank">Julia Pígali</a>. I play mostly the bass guitar but I love to geek out on synthesisers too.</p>
                                <p>On my <a href="https://github.com/leolanzinger" target="_blank">GitHub</a> you can also find some failed or partially abandoned experiments with different technologies and programming languages. After all, one has to find creative ways to doodle around...</p>
                            </AccordionItem>
                        </Accordion>
                        <Footer />
                    </section>
                    <img className="profile-pic" src={porfilePic} alt="profile picture" />
                </div>
            </motion.div>
        </main>
    )
}