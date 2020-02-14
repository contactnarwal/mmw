import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

const Title = styled.h1({
  color: "#000",
})
const P = styled.p({
  "& a": {
    fontWeight: "bold",
    color: "#303030",
  },
  "& a:hover": {
    color: "red",
  },
})

const SinglePortfolio = ({ pageContext: { portfolio }, data }) => {
  /*const BG = styled.div`
    background: url("${data.bgimage.childImageSharp.fluid.src}");
    &:before {
    content: ' ';
    display: "block";
    width: "100%";
    height: "100%";
    background: "rgba(255, 255, 255, 0.75)";
    position: "absolute";  
    }
  `*/
  const BG = styled.div({
    background: "url(" + data.bgimage.childImageSharp.fluid.src + ")",
    position: "relative",
    padding: "50px 0px",
    marginTop: "50px",
    "::before": {
      content: " ' ' ",
      display: "block",
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.75)",
      position: "absolute",
      top: "0",
    },
  })

  return (
    <>
      <PrimaryLayout>
        <BG>
          <Container style={{ marginTop: "80px" }}>
            <Row>
              <Col lg="5">
                {data.image.childImageSharp && (
                  <>
                    <a
                      href={data.image.childImageSharp.fluid.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img fluid={data.image.childImageSharp.fluid} />
                    </a>
                  </>
                )}
              </Col>
              <Col lg="1"></Col>
              <Col lg="6">
                <Title>{portfolio.title}</Title>
                <P>
                  <a
                    href={portfolio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolio.url}
                  </a>
                </P>
              </Col>
            </Row>
          </Container>
        </BG>
      </PrimaryLayout>
    </>
  )
}
export const pageQuery = graphql`
  query GetProject($image: String) {
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgimage: file(relativePath: { regex: "/port_single_back.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default SinglePortfolio
