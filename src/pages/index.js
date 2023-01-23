import * as React from "react"
import { useRef, useEffect, useState } from "react";
import Footer from "../components/footer"
import "../styles/style.css"

const mainStyles = {
  color: "#292929",
  fontFamily: "neue-haas-grotesk-display, helvetica, sans-serif, serif",
  // pointerEvents: "none"
}

const IndexPage = () => {

  const [svgTopColor, updateSvgTopColor] = useState("rgb(218, 41, 28)");
  const [svgBottomColor, updateSvgBottomColor] = useState("rgb(82,149,187)");

  let size = {
    width: 0,
    height: 0
  };

  const handleMouseMove = (event) => {
    updateSvgTopColor("rgb(" +
      Math.round(event.clientX / size.width * 255) + "," +
      Math.round(event.clientY / size.height * 255) + "," +
      // Math.round((event.clientX + event.clientY) / (size.height + size.width) * 255) +
      "25)");
    updateSvgBottomColor("rgb(" +
      Math.round(event.clientX / size.width * 255) + "," +
      "25," +
      Math.round((event.clientX + event.clientY) / (size.height + size.width) * 255) +
      ")");
  }

  useEffect(() => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
  });

  return (
    <div>
      <main
        onMouseMove={handleMouseMove}
        style={mainStyles}
        className="homepage">
        <div className="grid home-main-grid">
          <div className="box box-6 main title">
            <h1>Leonardo Lanzinger</h1>
            <div className="subtitle-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none">
                <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_118_40" />
                <defs>
                  <linearGradient id="paint0_linear_118_40" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor={svgTopColor} />
                    <stop offset="1" stopColor={svgBottomColor}/>
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="subtitle">
                digital
                <br />
                product
                <br />designer
              </h4>
            </div>
          </div>
          <div className="box-6 main content">
            <div className="content-box-wrapper">
              <div className="content-box">
                <h4>work</h4>
                <p>
                  I am a product designer with a passion for user research and design strategy.
                  I work as a Principal Product Designer at Zalando, the leading fashion ecommerce platform in Europe, designing experiences for people who buy and sell second-hand fashion online.
                </p>
                <p>
                  Previously, I was part of The Studio at Zalando, a design team with a focus on early stage ideas and strategic design propositions.
                  Before that, I was an Interaction Designer intern at Babbel, in Berlin.
                </p>
                <p>
                  Read more about my work <a href="/work">here</a>.
                </p>
              </div>
            </div>
            <div className="content-box-wrapper">
              <div className="content-box">
                <h4>education + music</h4>
                <p>
                  I have a bachelor degree in Computer Science and a master in Human-Computer Interaction Design.
                  When I am not glued to Figma or running user interviews, I produce and record music with <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU">Julia Pígali</a>, playing the bass guitar and the synthesiser.
                </p>
              </div>
            </div>
            <div className="content-box-wrapper">
              <div className="content-box">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Leonardo Lanzinger</title>
