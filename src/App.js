import React, { Component } from "react"
import Card from "./components/Card.js"
import "./App.css"
import IconFont from "./components/icons/IconFont.js"
import InlinePNGImages from "./components/icons/InlinePNGImages.js"

const containerStyle = {
  margin: "0 auto",
  maxWidth: 600
}
const sectionStyle = {
  margin: "60px 0"
}
const headerStyle = {
  textAlign: "center",
  marginBottom: 60
}
const h1Style = {
  margin: 0
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={containerStyle}>
          <header style={headerStyle}>
            <h1 style={h1Style}>Iconic</h1>
            <p>Literally every way to use icons</p>
            <a
              className="github-button"
              href="https://github.com/coryetzkorn/iconic"
              data-size="large"
              aria-label="Star coryetzkorn/iconic on GitHub"
            >
              Star
            </a>
          </header>
          <section style={sectionStyle}>
            <h2>Icon Font</h2>
            <Card>
              <IconFont />
            </Card>
          </section>
          <section style={sectionStyle}>
            <h2>PNG</h2>
            <Card>
              <InlinePNGImages />
            </Card>
          </section>
          <section style={sectionStyle}>
            <h2>Icon Font</h2>
            <Card>
              <IconFont />
            </Card>
          </section>
        </div>
      </div>
    )
  }
}

export default App
