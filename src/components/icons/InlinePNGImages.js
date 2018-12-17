import React from "react"

const actionGroupStyle = {
  display: "flex"
}
const actionItemStyle = {
  display: "flex",
  marginRight: 20,
  textDecoration: "none"
}
const actionItemImage = {
  width: 24,
  height: 24
}
const actionItemCount = {
  marginLeft: 5,
  fontSize: 12,
  fontWeight: "bold"
}

export default function InlinePNGImages(props) {
  return (
    <div style={actionGroupStyle}>
      <a href="#" style={actionItemStyle}>
        <img style={actionItemImage} src="/images/comment.png" />{" "}
        <span style={actionItemCount}>4</span>
      </a>
      <a href="#" style={actionItemStyle}>
        <img style={actionItemImage} src="/images/retweet.png" />{" "}
        <span style={actionItemCount}>3</span>
      </a>
      <a href="#" style={actionItemStyle}>
        <img style={actionItemImage} src="/images/like.png" />
        <span style={actionItemCount}>76</span>
      </a>
    </div>
  )
}
