import * as React from "react";
import { useRef, useEffect, useState } from "react";
import Footer from "../components/footer";
import "../styles/style.css";

const mainStyles = {
  color: "#292929",
  fontFamily: "neue-haas-grotesk-display, helvetica, sans-serif, serif",
  boxSizing: "border-box"
};

const IndexPage = () => {

  const [svgTopColor, updateSvgTopColor] = useState("rgb(218, 41, 28)");
  const [svgBottomColor, updateSvgBottomColor] = useState("rgb(82,149,187)");
  const [svgCorner, updateSvgCorner] = useState(10);
  const [svgWidth, updateSvgWidth] = useState(60);
  const [isMobile, setMobile] = useState(false);
  const [animationBorderDirection, setanimationBorderDirection] = useState(true);
  const [animationGrowthDirection, setanimationGrowthDirection] = useState(true);

  let size = {
    width: 0,
    height: 0
  };

  const handleMouseMove = (event) => {
    updateSvgCorner(event.clientX / size.width * 35);
    updateSvgTopColor("rgb(" +
      Math.round(size.height / event.clientY * 218) + "," +
      Math.round(size.height / event.clientY * 41) + "," +
      "28)");
    updateSvgBottomColor("rgb(" +
      Math.round(event.clientY / size.height * 82) + "," +
      "149," +
      Math.round(event.clientY / size.height * 187) +
      ")");
  };

  const updateIllustration = () => {
    const borderValue = animationBorderDirection ? svgCorner + 0.5 : svgCorner - 0.5;
    // const widthValue = animationGrowthDirection ? svgWidth + 1 : svgWidth - 1;
    if (svgCorner == 35) {
      setanimationBorderDirection(false);
    }
    if (svgCorner == 1) {
      setanimationBorderDirection(true);
    }
    if (svgWidth == 200) {
      setanimationGrowthDirection(false);
    }
    if (svgWidth == 61) {
      setanimationGrowthDirection(true);
    }
    updateSvgCorner(borderValue);
    // updateSvgWidth(widthValue);
    window.requestAnimationFrame(updateIllustration);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    if (size.width < 848) {
      setMobile(true);
      window.requestAnimationFrame(updateIllustration);
    }
    else {
      setMobile(false);
    }
  });

  return (
    <div>
      <main
        onMouseMove={handleMouseMove}
        style={mainStyles}
        className="homepage">
        <div className="grid home-main-grid">
          <div className="box-2"></div>
          <div className="box-1 canvas">
            <svg
              className="illustration"
              xmlns="http://www.w3.org/2000/svg"
              width={svgWidth + 16}
              height="76"
              viewBox={`0 0 ${svgWidth + 16} 76`}
              fill="none">
              {/* <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_118_40" /> */}
              <rect x="6" y="6" rx={svgCorner} ry={svgCorner} width={svgWidth} height="60" fill="transparent" strokeWidth="8" stroke="url(#paint0_linear_118_40" />
              <defs>
                <linearGradient id="paint0_linear_118_40" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
                  <stop stopColor={svgTopColor} />
                  <stop offset="1" stopColor={svgBottomColor}/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="box box-7 main">
            <h2>Leonardo Lanzinger</h2>
            <h1>Digital Product Designer</h1>
            <p>
              Hi! I am a designer with a focus on user research and design strategy. I am based in Berlin and I work as Principal Product Designer at Zalando, currently focusing on the circular second-hand proposition for Zalando's 50 million customers.
            </p>
            <p>
              My background is Computer Science and Human-Computer Interaction — and my guilty pleasures are React.js and the double diamond process.
            </p>
            <p>
              Read more about my work experience <a href="/work">here</a>.
            </p>
          </div>
        </div>
      </main>
      <div
        style={mainStyles} className="contacts-wrapper">
        <a href="about">About</a>
        <div className="contact-links">
          <a href="mailto:leonardo.lanzinger@gmail.com" className="social-link">Email</a>
          <a href="https://twitter.com/Leo_Lanzinger" className="social-link">Twitter</a>
          <a href="https://www.linkedin.com/in/leonardolanzinger/" className="social-link">Linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Leonardo Lanzinger</title>
