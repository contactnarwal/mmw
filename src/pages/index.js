import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container, Button } from "react-bootstrap"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const devider = {
  margin: "auto",
  display: "block",
}
const headerCenter = {
  textAlign: "center",
  fontWeight: "400",
  fontSize: "72px",
}
const headingPart = {
  fontWeight: "bold",
}
const bg = "why-choose-bg.jpg"
const imgWidth = {
  width: "100%",
}
const FlipRow = styled.div({})

const HeroFlip = styled.div({
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  background: "#E2E2E2",
  textAlign: "center",
})
const HeroflipItems = styled.div({
  width: "25%",
  display: "table-cell",
  height: "100%",
  verticalAlign: "middle",
})
const HeroFlipItemsTwo = styled.div({
  width: "75%",
  display: "table-cell",
  height: "100%",
  verticalAlign: "middle",
})
const HeroFlipInner = styled.div({ padding: "50px 42px 50px 42px" })
const FlipBox = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
})
const FlipItemInner = styled.div`
  border: 5px solid #fff;
  perspective: 1000px;
  height: 290px;
  &:hover ${FlipBox} {
    transform: rotateX(180deg);
  }
`
const FlipBack = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  padding: "15px",
  backgroundColor: "#EEEEEE",
  transform: "rotateX(180deg)",
})
const FlipLg = styled.div({
  width: "25%",
  float: "left",
})

const FlipFront = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  padding: "15px",
  backgroundColor: "transparent",
  "& h3": {
    fontSize: "18px",
  },
})

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: {
          eq: "home_page/Developing-Programming-And-Coding-mmw.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(
        relativePath: {
          eq: "images/home_page/Online-Marketing-Man-On-Computer-mmw.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(
        relativePath: { eq: "images/home_page/webdesign-email-hosting-mmw.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(
        relativePath: { eq: "images/home_page/molonglo-responsive.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerImage: file(relativePath: { eq: "images/header.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(
        relativePath: { eq: "home_page/Futuristic-Approach-mmw.png" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageSix: file(
        relativePath: { eq: "home_page/Understand-Your-Identity-mmw.png" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageSeven: file(relativePath: { eq: "home_page/Aim-to-Excel-mmw.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageEight: file(relativePath: { eq: "home_page/web-design_img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageNine: file(relativePath: { eq: "home_page/online-marketing.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTen: file(
        relativePath: { eq: "home_page/web-email-hosting_img.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageEleven: file(relativePath: { eq: "home_page/web-design_img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "home_page/ecommerce-img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "home_page/seo-service.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFourteen: file(
        relativePath: { eq: "home_page/content-writing.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "home_page/social.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSixteen: file(
        relativePath: { eq: "home_page/make-my-website-slide.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSeventeen: file(
        relativePath: {
          eq: "home_page/material-design-geometric-stock-dark-black.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageEighteen: file(
        relativePath: { eq: "home_page/toybox-early-learning-big.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "home_page/testi_user.JPG" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "home_page/five-stars.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwentyOne: file(
        relativePath: { eq: "home_page/toybox-early-learning-big.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PrimaryLayout>
      <br></br>
      <br></br>
      <Img fluid={data.headerImage.childImageSharp.fluid} />
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col>
            <h1 style={headerCenter}>
              About <span style={headingPart}> Make My Website</span>
            </h1>
            <img
              src="/devider.png"
              alt="devider"
              style={{ margin: "auto", display: "block" }}
            />
            <br /> <br />
            <h4 style={{ textAlign: "center" }}>
              We Don’t Just Build Websites, We Build Your Online Business!
            </h4>
            <br />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <p>
              Make My Website is a digital agency made up of extremely talented,
              highly trained and skilled professionals who work with you to
              create your online presence and are dedicated to meet the goals
              and guidelines to deliver your project.
            </p>
          </Col>
          <Col lg="6">
            <p>
              We are a small team of experts who is willing to work your way to
              help you succeed online.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="4" sm="4">
            <Img fluid={data.imageOne.childImageSharp.fluid} />
          </Col>
          <Col lg="4" sm="4">
            <Img fluid={data.imageTwo.childImageSharp.fluid} />
          </Col>
          <Col lg="4" sm="4">
            <Img fluid={data.imageThree.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <div style={{ backgroundImage: "url(" + bg + ")", padding: "80px 0px" }}>
        <Container>
          <Row>
            <Col>
              <h2 style={headerCenter}>
                Why <span style={headingPart}>Choose Us</span>
              </h2>
              <img src="/devider.png" alt="devider" style={devider} />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col lg="4">
              <Img fluid={data.imageFour.childImageSharp.fluid} />
            </Col>
            <Col lg="1"></Col>
            <Col lg="7">
              <Row>
                <Col lg="4" sm="4">
                  <Img fixed={data.imageFive.childImageSharp.fixed} />
                  <h6>We Have A Futuristic Approach</h6>
                </Col>
                <Col lg="4" sm="4">
                  <Img fixed={data.imageSeven.childImageSharp.fixed} />
                  <h6>We Aim To Excel</h6>
                </Col>
                <Col lg="4" sm="4">
                  <Img fixed={data.imageSix.childImageSharp.fixed} />
                  <h6>We Understand Your Identity</h6>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col lg="6" sm="6">
                  <Img fixed={data.imageSeven.childImageSharp.fixed} />
                  <h6>We Aim To Excel</h6>
                </Col>
                <Col lg="6" sm="6">
                  <img
                    src="/home_page/Understand-Your-Identity-mmw.png"
                    alt="We Understand Your Identity"
                  />
                  <h6>We Understand Your Identity</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h2 style={headerCenter}>
              Our <span style={headingPart}>Service </span>
            </h2>
            <img src="/devider.png" alt="devider" style={devider} />
            <p style={{ textAlign: "center" }}>
              Elevate Your Businesses Capabilities With One Step. We offer a
              wide variety of website design services.
            </p>
            <Button
              variant="danger"
              style={{ display: "block", margin: "auto" }}
            >
              View All Services
            </Button>
          </Col>
        </Row>
      </Container>
      <HeroFlip>
        <HeroflipItems>
          <HeroFlipInner>
            <h2>
              Our <b>Services</b>
            </h2>
            <p>
              Elevate Your Businesses Capabilities With One Step. We offer a
              wide variety of website design services.
            </p>
          </HeroFlipInner>
        </HeroflipItems>

        <HeroFlipItemsTwo>
          <FlipRow>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageEight.childImageSharp.fluid} />
                    <h3>Web Design</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Web Design</h3>
                    <p>
                      The world is getting advanced and for matching the
                      standards of present era, online existence is must.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageNine.childImageSharp.fluid} />
                    <h3>Online Marketing</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Online Marketing</h3>
                    <p>
                      Marketing is essential today and no business can shrug off
                      the value of this powerful factor.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageTen.childImageSharp.fluid} />
                    <h3>Web And Email Hosting</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Web And Email Hosting</h3>
                    <p>
                      Web hosting is actually the space which you purchase on a
                      web server so as to store your site files.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageEleven.childImageSharp.fluid} />
                    <h3>Online Marketing</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Online Marketing</h3>
                    <p>
                      Marketing is essential today and no business can shrug off
                      the value of this powerful factor.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageTwelve.childImageSharp.fluid} />
                    <h3>Ecommerce</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Ecommerce</h3>
                    <p>
                      Over the previous decade the usefulness of internet has
                      augmented manifold.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageThirteen.childImageSharp.fluid} />
                    <h3>SEO</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>SEO</h3>
                    <p>
                      SEO is one of the main marketing channels to endorse
                      website exposure via higher visibility in search engines.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageFourteen.childImageSharp.fluid} />
                    <h3>Content Writing</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Content Writing</h3>
                    <p>
                      At Make My Website, our experts are well acquainting with
                      all the tactics of content writing.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>
            <FlipLg>
              <FlipItemInner>
                <FlipBox>
                  <FlipFront>
                    <Img fluid={data.imageFifteen.childImageSharp.fluid} />
                    <h3>Social Media Marketing</h3>
                  </FlipFront>
                  <FlipBack>
                    <h3>Social Media Marketing</h3>
                    <p>
                      No matter what you sell and who is your buyer, making use
                      of social media as a marketing device can prove very
                      helpful for growing your brand.
                    </p>
                  </FlipBack>
                </FlipBox>
              </FlipItemInner>
            </FlipLg>

            <div style={{ clear: "both" }}></div>
          </FlipRow>
        </HeroFlipItemsTwo>
      </HeroFlip>

      <br />
      <div
        style={{
          background: "url('/home_page/make-my-website-slide.jpg')",
          padding: "80px 0px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h2 style={headerCenter}>
                Happy <span style={headingPart}>Clients</span>
              </h2>
              <img src="/devider.png" alt="devider" style={devider} />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}>
                5 Star Rated Web Design Agency.
              </h5>
            </Col>
          </Row>
          <Row
            style={{
              backgroundImage:
                "url('/home_page/material-design-geometric-stock-dark-black.jpg')",
              padding: "20px 30px",
            }}
          >
            <Col lg="3">
              <Img fluid={data.imageEighteen.childImageSharp.fluid} />
            </Col>
            <Col lg="6">
              <Img
                fixed={data.imageNineteen.childImageSharp.fixed}
                style={{ margin: "auto", display: "block" }}
              />
              <Img
                fixed={data.imageTwenty.childImageSharp.fixed}
                style={{ margin: "auto", display: "block" }}
              />
              <p style={{ color: "white" }}>
                Absolutely LOVE my website!! This team is beyond amazing. Had a
                bad experience with another designer and these guys definitely
                came to my rescue!! Thank you so much. I LOVE LOVE LOVE my
                website! Thank you all so much again! Definitely will recommend
                you to everyone I know!
              </p>
              <p>
                <b style={{ color: "white" }}>Amanie Kalache - </b>
                <a href="https://www.123smilephotography.com/">
                  www.123smilephotography.com/
                </a>
              </p>
            </Col>
            <Col lg="3">
              <Img fluid={data.imageTwentyOne.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </div>
    </PrimaryLayout>
  )
}

export default Index
