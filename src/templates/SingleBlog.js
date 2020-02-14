import React from "react"
import PrimaryLayouts from "../layouts/PrimaryLayouts"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const SingleBlog = ({ pageContext: { blog }, data }) => {
  return (
    <PrimaryLayouts>
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col>
            <Img fluid={data.image.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{ marginTop: "50px" }}
            />
          </Col>
        </Row>
      </Container>
    </PrimaryLayouts>
  )
}
export const pageQuery = graphql`
  query GetBlog($image: String) {
    image: file(relativePath: { regex: $image }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default SingleBlog
