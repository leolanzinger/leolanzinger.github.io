import * as React from "react"
import Footer from "../components/footer"
import "../styles/style.css"

const mainStyles = {
  color: "#222222",
  fontFamily: "Helvetica Neue, helvetica, sans-serif, serif"
}

const IndexPage = () => {
  return (
    <main style={mainStyles}>
      <div className="grid">
        <div className="box-12 main">
          <h1>Hi, I am Leonardo Lanzinger!</h1>
        </div>
        <div className="box-12 main">
          <p>
            I am a product designer with a passion for user research and design strategy. I work as a Senior Product Designer at Zalando Recommerce, designing experiences for people who buy and sell second-hand fashion.
          </p>
          <p>
            Previously, I was part of The Studio at Zalando, a design team with a focus on early stage ideas and strategic design propositions. I also worked for Babbel in Berlin and Belka in Trento, Italy.
          </p>
          <p>
            Read more about my work <a href="/work">here</a>.
          </p>
        </div>
        <div className="box-12 main">
          <hr/>
        </div>
        <div className="box-12 main">
          <p>
            I held a degree in Computer Science and Human-Computer interaction. When I am not glued to Figma or running user interviews, I produce and record music with <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU">Julia Pígali</a>, playing the bass guitar or the synthesiser.
          </p>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Leonardo Lanzinger</title>
