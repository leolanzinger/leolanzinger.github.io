import * as React from "react"
import "../styles/style.css"

const mainStyles = {
  color: "#222222",
  fontFamily: "Helvetica Neue, helvetica, sans-serif, serif"
}

const NotFoundPage = () => {
  return (
    <main style={mainStyles}>
      <div className="grid">
        <div className="box-12 main">
          <a className="nav" href="/">Leonardo Lanzinger</a>
        </div>
        <div className="box-12 main">
          <h1>Ups, can't find what you are looking for!</h1>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
