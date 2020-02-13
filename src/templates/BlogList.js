import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export const pageQuery = graphql`
  query GetProjects {
    images: allFile(filter: { relativeDirectory: { eq: "images/blog" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = ({ pageContext: { Blogs }, data }) => {
  console.log(data.images.edges)
  const blogWithImages = Blogs.map(blog => {
    const image = data.images.edges.find(
      image => image.node.relativePath === blog.source_url
    )
    // if (!image) console.log("blog with no image", blog)
    const newBlog = {
      ...blog,
      childImageSharp: image ? image.node.childImageSharp : undefined,
    }

    return newBlog
  })

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
          {blogWithImages.map((Blogs, Index) => {
            const create = new Date(Blogs.date)
            return (
              <Col lg="4">
                <a href={Blogs.path}>
                  {Blogs.childImageSharp && (
                    <Img fluid={Blogs.childImageSharp.fluid} />
                  )}
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
