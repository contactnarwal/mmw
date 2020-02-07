import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container } from "react-bootstrap"
const BlogList = ({ pageContext: { Blogs } }) => {
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
  const titleRow = {
    margin: "50px 0px",
  }
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
    <PrimaryLayout>
      <Container>
        <Row style={titleRow}>
          <Col>
            <h1 style={{ textAlign: "center" }}>Our Blog</h1>
            <img
              src="/devider.jpg"
              alt="devider"
              style={{ display: "block", margin: "auto" }}
            />
          </Col>
        </Row>
        <Row>
          {Blogs.map((Blogs, Index) => {
            const create = new Date(Blogs.date)

            return (
              <Col lg="4">
                <a href={Blogs.path}>
                  <img
                    src={Blogs.source_url}
                    alt={Blogs.title}
                    style={imgstyle}
                  />
                </a>
                <div style={inner}>
                  <h5
                    dangerouslySetInnerHTML={{ __html: Blogs.title }}
                    style={h4}
                  />
                  <p style={{ color: "#aaa", fontSize: "14px" }}>
                    {monthNames[create.getMonth()]} {create.getDate()},{" "}
                    {create.getUTCFullYear()} | {Blogs.name}
                  </p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </PrimaryLayout>
  )
}
export default BlogList
