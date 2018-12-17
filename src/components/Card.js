import React from "react"
import PureCSS from "./icons/PureCSS"
import IconFont from "./icons/IconFont"

const cardStyle = {
  position: "relative",
  background: "#15202b",
  border: "1px solid #38444d",
  color: "#FFFFFF",
  maxWidth: 600,
  padding: 20,
  textAlign: "left",
  margin: "20px auto",
  borderRadius: "8px"
}
const accountGroupStyle = {
  display: "flex"
}
const bodyStyle = {
  fontSize: "27px",
  lineHeight: "32px",
  letterSpacing: ".01em",
  margin: "0.5em 0"
}
const avatarStyle = {
  display: "block",
  width: 48,
  height: 48,
  borderRadius: 48,
  marginRight: 10,
  overflow: "hidden"
}
const nameGroupStyle = {
  paddingTop: 3
}
const fullNameStyle = {
  display: "block",
  fontSize: 18,
  fontWeight: "bold",
  color: "#FFFFFF"
}
const usernameStyle = {
  display: "block",
  fontSize: 14,
  color: "#8899a6"
}
const moreButtonStyles = {
  position: "absolute",
  cursor: "pointer",
  padding: 10,
  top: 10,
  right: 10
}
const metaStyle = {
  color: "#8899a6",
  fontSize: 14
}
const actionStyle = {
  borderTop: "1px solid #38444d",
  marginTop: 20,
  paddingTop: 20
}

export default function Square(props) {
  const twitterURL = "https://www.twitter.com/coryetzkorn"
  return (
    <div style={cardStyle}>
      <div style={accountGroupStyle}>
        <a href={twitterURL}>
          <img
            style={avatarStyle}
            src="https://pbs.twimg.com/profile_images/976094836083380224/U0u9zfok_bigger.jpg"
            alt="Cory Etzkorn"
          />
        </a>
        <div style={nameGroupStyle}>
          <a href={twitterURL} style={fullNameStyle}>
            Cory Etzkorn
          </a>
          <a href={twitterURL} style={usernameStyle}>
            @coryetzkorn
          </a>
        </div>
      </div>
      <div style={moreButtonStyles}>
        <PureCSS />
      </div>
      <p style={bodyStyle}>
        This morning my therapist and I reached the conclusion that I should
        start learning React
      </p>
      <a href={twitterURL} style={metaStyle}>
        8:50AM – 25 Sep 2018
      </a>
      <div style={actionStyle}>{props.children}</div>
    </div>
  )
}
