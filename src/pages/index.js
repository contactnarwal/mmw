import React from "react"
import Post from "../components/Post"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import { Row, Col } from "react-bootstrap"
export default ({ data }) => {
  const titleRow = {
    margin: "50px 0px",
  }
  return (
    <>
      <PrimaryLayout column="8" sidebar="4">
        <Row style={titleRow}>
          <Col>
            <h1 style={{ textAlign: "center" }}>Our Blog</h1>
            <img
              src="devider.jpg"
              alt="devider"
              style={{ display: "block", margin: "auto" }}
            />
          </Col>
        </Row>
        <Row>
          {data.allWordpressPost.nodes.map((node, dev) => (
            <Post
              title={node.title}
              image={node.featured_media.source_url}
              devender="hello content"
              readMore={node.slug}
              key={dev}
              category={node.categories[0].name}
              create={node.date}
              excerpt={node.excerpt}
            ></Post>
          ))}
        </Row>
      </PrimaryLayout>
    </>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
          slug
        }
        date
        categories {
          name
        }
      }
    }
  }
`
