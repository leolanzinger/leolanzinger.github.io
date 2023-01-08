import * as React from "react"
import "../styles/style.css"

const mainStyles = {
  color: "#222222",
  fontFamily: "DM Sans, Helvetica Neue, helvetica, sans-serif, serif"
}

const NotFoundPage = () => {
  return (
    <main style={mainStyles}>
      <div className="grid">
        <div className="box-12 main">
          <h1>Ups, I can't find what you are looking for!</h1>
        </div>
        <div className="box-12 main">
          <a className="no-italics" href="/">Go back</a>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
