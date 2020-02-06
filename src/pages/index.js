import React from "react"
import Post from "../components/Post"
import { graphql, Link } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import { Row, Col } from "react-bootstrap"
export default ({
  pageContext: { limit, skip, numPages, currentPage },
  data,
}) => {
  /*
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  */
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
        <Row style={{ marginTop: "60px" }}>
          <Col lg="3" />
          <Col lg="6">
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
              }}
            >
              {/*!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              )*/}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                    width: "auto",
                    display: "inline-block",
                    marginRight: "7px",
                  }}
                >
                  <Link
                    to={`/${i === 0 ? "" : i + 1}`}
                    style={{
                      background:
                        i + 1 === currentPage
                          ? "rgb(6, 6, 8)"
                          : "rgb(237, 28, 36)",
                      padding: "13px 22px",
                      boxShadow: "0px 3px 5px 0px rgba(0,0,0,.13)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {/* !isLast && (
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
              )*/}
            </ul>
          </Col>
          <Col lg="3" />
        </Row>
      </PrimaryLayout>
    </>
  )
}

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allWordpressPost(limit: $limit, skip: $skip) {
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
