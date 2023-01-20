import * as React from "react"
import "../styles/style.css"

const Footer = () => {
    return (
        <div className="footer">
            <h4>contacts</h4>
            <p>
                <a href="mailto:leonardo.lanzinger@gmail.com" className="social-link">Email</a> / <a href="https://twitter.com/Leo_Lanzinger" className="social-link">Twitter</a> / <a href="https://www.linkedin.com/in/leonardolanzinger/" className="social-link">Linkedin</a>
            </p>
        </div>
    )
}

export default Footer