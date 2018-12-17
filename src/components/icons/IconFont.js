import React from "react"

const actionGroupStyle = {
  display: "flex"
}
const actionItemStyle = {
  display: "flex",
  marginRight: 20,
  textDecoration: "none"
}
const actionItemCount = {
  marginLeft: 5,
  fontSize: 12,
  fontWeight: "bold"
}

export default function IconFont(props) {
  return (
    <div style={actionGroupStyle}>
      <a href="#" style={actionItemStyle}>
        <div className="icon-comment" /> <span style={actionItemCount}>4</span>
      </a>
      <a href="#" style={actionItemStyle}>
        <div className="icon-retweet" /> <span style={actionItemCount}>3</span>
      </a>
      <a href="#" style={actionItemStyle}>
        <div className="icon-like" /> <span style={actionItemCount}>76</span>
      </a>
    </div>
  )
}
