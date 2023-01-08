import * as React from "react"
import Footer from "../components/footer"
import AnimationCanvas from "../components/AnimationCanvas";
import "../styles/style.css"
import { NONAME } from "dns";

const mainStyles = {
  color: "#222222",
  fontFamily: "neue-haas-grotesk-display, helvetica, sans-serif, serif",
  pointerEvents: "none"
}

const IndexPage = () => {
  return (
    <div>
      <AnimationCanvas />
      <main style={mainStyles} className="homepage">
        <div className="grid">
          <div className="box-7 main title">
            <h1>Leonardo Lanzinger</h1>
            <h4 className="subtitle">digital product designer</h4>
          </div>
          <div className="box-5 main">
            <h4>work</h4>
            <p>
              I am a product designer with a passion for user research and design strategy.
              I work as a Principal Product Designer at Zalando Recommerce, designing experiences for people who buy and sell second-hand fashion.
            </p>
            <p>
              Previously, I was part of The Studio at Zalando, a design team with a focus on early stage ideas and strategic design propositions.
              I also worked for Babbel in Berlin and Belka in Trento, Italy.
            </p>
            <p>
              Read more about my work <a href="/work">here</a>.
            </p>
            <h4>education + music</h4>
            <p>
              I have a bachelor degree in Computer Science and a master in Human-Computer Interaction Design.
              When I am not glued to Figma or running user interviews, I produce and record music with <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU">Julia Pígali</a>, playing the bass guitar and the synthesiser.
            </p>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Leonardo Lanzinger</title>
