import React, { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
const Paginator = (items, page, per_page) => {
  page = page || 1
  per_page = per_page || 10
  const offset = (page - 1) * per_page
  const paginatedItems = items.slice(offset).slice(0, per_page)
  const total_pages = Math.ceil(items.length / per_page)
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  }
}
const PageTitle = styled.h1({
  textAlign: "center",
  fontWeight: "400",
  fontSize: "72px",
})
const ItemTitle = styled.h4({
  position: "absolute",
  top: "50%",
  left: "10%",
  background: "rgba(0, 0, 0, 0.8)",
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  padding: "20px 10px",
  width: "80%",
  margin: "auto",
  display: "block",
})
const LoadMore = styled.button({
  background: "#ed1c24",
  color: "white",
  fontWeight: "bold",
  border: "none",
  padding: "5px 20px",
  borderRadius: "5px",
  margin: "auto",
  display: "block",
  "&:focus": {
    outline: "none",
  },
})
const TagItem = styled.button(
  {
    cursor: "pointer",
    background: "white",
    border: "1px solid #D3D3D3",
    padding: "7px 15px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#3A3A3A",
    margin: "0 5px 10px",
    "&:hover": {
      background: "#f61e28",
      color: "white",
    },
    "&:focus": {
      outline: "none",
    },
  },
  ({ active }) => ({
    background: active && "red",
    color: active && "white",
  })
)
const Portfolio = ({ pageContext: { porfolios }, data }) => {
  const [more, setMore] = useState(12)
  const [activeTag, setActiveTag] = useState(undefined)

  const porfoliosWithImages = porfolios.map(project => {
    const image = data.images.edges.find(
      image => image.node.relativePath === project.image
      //image => image.node.relativePath === image.node.relativePath
    )

    const newProject = {
      ...project,
      childImageSharp: image ? image.node.childImageSharp : undefined,
    }

    return newProject
  })

  const tags = porfolios
    .map(project => project.tags)
    .reduce((allTags, currentTags) => [...allTags, ...currentTags], [])
  const uniqueTags = Array.from(new Set(tags))
  const withPagination = Paginator(porfoliosWithImages, 1, more)

  return (
    <>
      <PrimaryLayout>
        <div
          style={{
            background: "url('/portfolio-background.jpg')",
            marginTop: "10px",
            padding: "60px 0px",
          }}
        >
          <Container>
            <Row>
              <Col>
                <PageTitle>Our Portfolio</PageTitle>
                <Img
                  fixed={data.devider.childImageSharp.fixed}
                  style={{ margin: "auto", display: "block" }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Col>
                <TagItem
                  onClick={() => {
                    setActiveTag(undefined)
                    setMore(12)
                  }}
                >
                  All
                </TagItem>
                {uniqueTags.map(tag => (
                  <TagItem
                    key={tag}
                    onClick={() => {
                      setActiveTag(tag)
                      setMore(100)
                    }}
                    active={activeTag === tag}
                  >
                    {tag}
                  </TagItem>
                ))}
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              {withPagination.data
                .filter(
                  project =>
                    activeTag === undefined || project.tags.includes(activeTag)
                )
                .map((project, index) => {
                  //console.log(project.childImageSharp)
                  return (
                    <Col lg="3" key={index} style={{ marginBottom: "20px" }}>
                      <Link to={`/portfolio/${project.path}`}>
                        {project.childImageSharp && (
                          <Img
                            fluid={project.childImageSharp.fluid}
                            style={{
                              maxWidth: "100%",
                              margin: "atuo",
                              display: "block",
                            }}
                          />
                        )}
                        <ItemTitle>{project.title}</ItemTitle>
                      </Link>
                    </Col>
                  )
                })}
            </Row>
            <Row>
              <Col>
                <LoadMore onClick={() => setMore(more + 4)}>Load More</LoadMore>
              </Col>
            </Row>
          </Container>
        </div>
      </PrimaryLayout>
    </>
  )
}
export const pageQuery = graphql`
  query Getporfolios {
    images: allFile(filter: { relativeDirectory: { regex: "/portfolio/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    devider: file(relativePath: { regex: "/devider.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Portfolio
