import React, { useState } from "react"

import { Row, Col, Container } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import Img from "gatsby-image"
const Portfolio = ({ pageContext: { porfolios }, data }) => {
  //const [activeTag, setActiveTag] = useState(undefined)
  console.log(data)

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
  console.log(data)
  /* const tags = porfolios
    .map(project => project.tags)
    .reduce((allTags, currentTags) => [...allTags, ...currentTags], [])
  const uniqueTags = Array.from(new Set(tags))*/
  return (
    <>
      <PrimaryLayout>
        <Container>
          <Row>
            {porfoliosWithImages.map((project, index) => {
              //console.log(project.childImageSharp)
              return (
                <Col lg="6" key={index}>
                  {project.childImageSharp && (
                    <>
                      <Img
                        fluid={project.childImageSharp.fluid}
                        style={{
                          maxWidth: "100%",
                          margin: "atuo",
                          display: "block",
                        }}
                      />
                    </>
                  )}

                  <h1>{project.title}</h1>
                </Col>
              )
            })}
          </Row>
        </Container>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Portfolio
