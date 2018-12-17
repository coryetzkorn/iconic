import React from "react"

const moreIconStyles = {
  width: 8,
  height: 8,
  marginTop: -4,
  borderBottom: "2px solid #8899a6",
  borderRight: "2px solid #8899a6",
  transform: "rotate(45deg)"
}

export default function IconMadeWithPureCSS(props) {
  return <div style={moreIconStyles} />
}
