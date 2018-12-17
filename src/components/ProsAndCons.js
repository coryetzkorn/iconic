import React from "react"
import IconMadeWithPureCSS from "./IconMadeWithPureCSS"

const prosConsStyle = {
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

export default function ProsAndCons(props) {
  return (
    <div style={prosConsStyle}>
      <ul>
        <li>Good Item</li>
      </ul>
    </div>
  )
}
