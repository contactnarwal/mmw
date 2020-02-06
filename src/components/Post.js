import React from "react"
import { Col, Button } from "react-bootstrap"
const imgstyle = {
  width: "100%",
}
const inner = {
  background: "#333",
  padding: "30px",
}
const h4 = {
  color: "white",
}
const Post = props => {
  const create = new Date(props.create)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return (
    <Col lg="4">
      <a href={props.readMore}>
        <img src={props.image} alt={props.alt || "default"} style={imgstyle} />
      </a>
      <div style={inner}>
        <h5 dangerouslySetInnerHTML={{ __html: props.title }} style={h4} />
        <p style={{ color: "#aaa", fontSize: "14px" }}>
          {monthNames[create.getMonth()]} {create.getDate()},{" "}
          {create.getUTCFullYear()} | {props.category}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
          style={{ color: "#eee" }}
        />
      </div>
    </Col>
  )
}
export default Post
