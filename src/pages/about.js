import * as React from "react";
import { useEffect } from "react";
import "../styles/style.css";
import processImage from "../images/about_viz.svg";

const mainStyles = {
  color: "#292929",
  fontFamily: "neue-haas-grotesk-display, helvetica, sans-serif, serif",
  width: "100%",
  boxSizing: "border-box"
}

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <main 
        style={mainStyles} className="about">
        <div className="grid">
          <div className="box-3"></div>
          <div className="box box-6 main">
            <h1>About</h1>
            <p>I am a Product Designer with a passion for tackling complex challenges through user centricity. I love connecting  user needs, motivations and desires with product and business strategy, designing usable solutions that focus on effectiveness, efficiency and delight. I have a fond interest in circular design, in having a positive impact on people and the planet through the design practice and in enabling teams to be more user centric by sharing design tools and methods.</p>
            <p>My design process revolves around the so-called “double diamond” approach. Besides its name and shape, I believe in understanding the difference between problem and solution spaces. Through the use of a variety of design methods, tools and mindsets, I dive deep into understanding the customer,  the technology and business context to define the problem (or opportunity) space. Once equipped with it, I move into the solution space to design, test, iterate, launch, measure and — many times — to go back and redefine the problem space.</p>
            <p>Through experience, I learned that complexity is always in the mix. I also preach the “know the rules, break the rules” motto: that is, mastering frameworks and tools means to remain flexible, humble and always be ready to adapt to different contexts, teams and objectives.</p>
            <p>Long story short? I believe knowledge is adaptability — and so it’s the design process.</p>
            <div className="about-image-wrapper">
              <img src={processImage} alt="design process" />
            </div>
            <h4>A bit about my career so far</h4>
            <p>While studying Computer Science, I started my career as a front-end developer, working mostly on websites and Android apps. I always had an interest in the user interaction layer, so I moved on to a master in Human Computer Interaction and wrote a thesis on a gesture based music controller implemented on a Leap Motion device.</p>
            <p>After my studies, I joined Zalando — an online fashion e-commerce platform based in Berlin  — as a Creative Technologist for The Studio, a design unit working on new ideas and opportunity areas. While there, I transitioned into a Product Design role, mostly involved in customer research and early stage strategic design projects. In 2021 I joined the Recommerce team as an embedded product designer, working in a full staffed product team. You can read more about my work experience <a href="/work">here</a>.</p>
            <h4>Last, but not least</h4>
            <p>Beside work, I spend a lot of time playing and producing music with two projects: <a href="https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme?si=xBxP01xlRvOsKEW8bY7O2g">Bob and the Apple</a> and <a href="https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU?si=N_g3ZnxfQW-tQ3TILesGww">Julia Pígali</a>. I play mostly the bass guitar but I love to geek out on synthesisers too.</p>
            <p>On my <a href="https://github.com/leolanzinger">GitHub</a> you can also find some failed or partially abandoned experiments with different technologies and programming languages. After all, one has to find creative ways to doodle around...</p>
          </div>
          <div className="box-3"></div>
        </div>
      </main>
        <div
          style={mainStyles} className="contacts-wrapper about-contacts">
           <a href="/">Leonardo Lanzinger</a>
          <div className="contact-links">
            <a href="mailto:leonardo.lanzinger@gmail.com" className="social-link">Email</a>
            <a href="https://twitter.com/Leo_Lanzinger" className="social-link">Twitter</a>
            <a href="https://www.linkedin.com/in/leonardolanzinger/" className="social-link">Linkedin</a>
            <a href="https://github.com/leolanzinger" className="social-link">GitHub</a>
          </div>
        </div>
    </div>
  );
};

export default About;
