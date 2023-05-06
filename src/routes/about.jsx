import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import backArrow from "../assets/back_arrow.svg"
import aboutViz from "../assets/about_viz.svg"

export default function About() {
    return (
        <motion.main
            className="about__container"
            key="about"
            initial={{ backgroundColor: '#FEFEFE', paddingTop: '600px' }}
            animate={{ backgroundColor: '#00254F', paddingTop: '0px' }}
            exit={{ opacity: 0, paddingTop: '300px' }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="root about"
                key="about-content"
                initial={{ gap: '380px' }}
                animate={{ gap: '40px' }}
                exit={{ opacity: 0, gap: '380px' }}
                transition={{ duration: 0.1, delay: 0.2 }}
            >
                <Link to={`/`}><img src={backArrow} alt="back-arrow" className="back-arrow"/></Link>
                <h1>About</h1>
                <section className="about-section">
                    <p>I am a Product Designer with a passion for tackling complex challenges through user centricity. I have a fond interest in circular design, in having a positive impact on people and the planet through the design practice and in enabling teams to be more user centric by sharing design tools and methods.</p>
                    <p>My design process revolves around the so-called “double diamond” approach, but I also preach the “know the rules, break the rules” motto: that is, mastering frameworks and tools means to remain flexible, humble and always be ready to adapt to different contexts, teams and objectives.</p>
                    <img src={aboutViz} alt="illustration of my design process" />
                    <p>Long story short? I believe knowledge is adaptability — and so it’s the design process. Drop me a line if you think my profile fits what you are looking for!</p>
                </section>
                <section className="about-section">
                    <h2>A bit about my career so far</h2>
                    <p>While studying Computer Science at University of Trento, I started my career as a front-end developer, working mostly on websites and Android apps. Afterwards, I moved on to a attend a master in Human Computer Interaction and wrote a thesis on a gesture based music controller implemented on a Leap Motion device.</p>
                    <p>After my studies, I joined Zalando — an online fashion e-commerce platform based in Berlin — as a Creative Technologist for The Studio, a design unit working on new ideas and opportunity areas. While there, I transitioned into a Product Design role, mostly involved in customer research and early stage strategic design projects. In 2021 I joined the Recommerce team as an embedded product designer, working in a full staffed product team.</p>
                </section>
                <section className="about-section">
                    <h2>Last, but not least</h2>
                    <p>Beside work, I spend a lot of time playing and producing music with two projects: <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme?si=xBxP01xlRvOsKEW8bY7O2g&nd=1" target="_blank">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU?si=N_g3ZnxfQW-tQ3TILesGww&nd=1" target="_blank">Julia Pígali</a>. I play mostly the bass guitar but I love to geek out on synthesisers too.</p>
                    <p>On my <a href="https://github.com/leolanzinger" target="_blank">GitHub</a> you can also find some failed or partially abandoned experiments with different technologies and programming languages. After all, one has to find creative ways to doodle around...</p>
                </section>
            </motion.div>
        </motion.main>
    )
}