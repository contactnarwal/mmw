import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container } from "react-bootstrap"
import HeroSlider from "../components/heroSlider.js"
import TypingEffect from "../components/typingEffect.js"
function SlideShow() {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: { relativePath: { regex: "/home_bg/" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <PrimaryLayout>
      <Container>
        <Row>
          <Col style={{ minHeight: "500px" }}>
            <TypingEffect />
          </Col>
        </Row>
      </Container>
    </PrimaryLayout>
  )
}
export default SlideShow
