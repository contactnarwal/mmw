import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
const SingleBlog = ({ data }) => {
  const post = data.wordpressPost
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={8}>
            <img
              src={post.featured_media.source_url}
              alt="gatsby"
              style={{ width: "100%" }}
            />
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}
export default SingleBlog
export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`
