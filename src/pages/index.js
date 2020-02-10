import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container, Button } from "react-bootstrap"
import styled from "@emotion/styled"
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

const Index = () => (
  <PrimaryLayout>
    <br></br>
    <br></br>
    <img src="/header.JPG" alt="MMW website" style={{ width: "100%" }}></img>
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
            highly trained and skilled professionals who work with you to create
            your online presence and are dedicated to meet the goals and
            guidelines to deliver your project.
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
          <img
            src="/Developing-Programming-And-Coding-mmw.jpg"
            alt="MMW Programing"
            style={imgWidth}
          />
        </Col>
        <Col lg="4" sm="4">
          <img
            src="/Online-Marketing-Man-On-Computer-mmw.jpg"
            alt="Online Marketing MMW"
            style={imgWidth}
          />
        </Col>
        <Col lg="4" sm="4">
          <img
            src="/webdesign-email-hosting-mmw.jpg"
            alt="webdesign MMW"
            style={imgWidth}
          />
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
            <img
              src="/home_page/molonglo-responsive.png"
              alt="responsive website MMW"
              style={imgWidth}
            />
          </Col>
          <Col lg="1"></Col>
          <Col lg="7">
            <Row>
              <Col lg="4" sm="4">
                <img
                  src="/home_page/Futuristic-Approach-mmw.png"
                  alt="MMW Approach"
                />
                <h6>We Have A Futuristic Approach</h6>
              </Col>
              <Col lg="4" sm="4">
                <img
                  src="/home_page/Aim-to-Excel-mmw.png"
                  alt="We Aim To Excel"
                />
                <h6>We Aim To Excel</h6>
              </Col>
              <Col lg="4" sm="4">
                <img
                  src="/home_page/Understand-Your-Identity-mmw.png"
                  alt="We Understand Your Identity"
                />
                <h6>We Understand Your Identity</h6>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col lg="6" sm="6">
                <img
                  src="/home_page/Aim-to-Excel-mmw.png"
                  alt="We Aim To Excel"
                />
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
            Elevate Your Businesses Capabilities With One Step. We offer a wide
            variety of website design services.
          </p>
          <Button variant="danger" style={{ display: "block", margin: "auto" }}>
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
            Elevate Your Businesses Capabilities With One Step. We offer a wide
            variety of website design services.
          </p>
        </HeroFlipInner>
      </HeroflipItems>

      <HeroFlipItemsTwo>
        <FlipRow>
          <FlipLg>
            <FlipItemInner>
              <FlipBox>
                <FlipFront>
                  <img src="/home_page/web-design_img.png" style={imgWidth} />
                  <h3>Web Design</h3>
                </FlipFront>
                <FlipBack>
                  <h3>Web Design</h3>
                  <p>
                    The world is getting advanced and for matching the standards
                    of present era, online existence is must.
                  </p>
                </FlipBack>
              </FlipBox>
            </FlipItemInner>
          </FlipLg>
          <FlipLg>
            <FlipItemInner>
              <FlipBox>
                <FlipFront>
                  <img src="/home_page/online-marketing.png" style={imgWidth} />
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
                  <img
                    src="/home_page/web-email-hosting_img.png "
                    style={imgWidth}
                  />
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
                  <img src="/home_page/web-design_img.png" style={imgWidth} />
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
                  <img src="/home_page/ecommerce-img.png" style={imgWidth} />
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
                  <img src="/home_page/seo-service.png" style={imgWidth} />
                  <h3>SEO</h3>
                </FlipFront>
                <FlipBack>
                  <h3>SEO</h3>
                  <p>
                    SEO is one of the main marketing channels to endorse website
                    exposure via higher visibility in search engines.
                  </p>
                </FlipBack>
              </FlipBox>
            </FlipItemInner>
          </FlipLg>
          <FlipLg>
            <FlipItemInner>
              <FlipBox>
                <FlipFront>
                  <img src="/home_page/content-writing.png" style={imgWidth} />
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
                  <img src="/home_page/social.png" style={imgWidth} />
                  <h3>Social Media Marketing</h3>
                </FlipFront>
                <FlipBack>
                  <h3>Social Media Marketing</h3>
                  <p>
                    No matter what you sell and who is your buyer, making use of
                    social media as a marketing device can prove very helpful
                    for growing your brand.
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
            <img
              src="/home_page/toybox-early-learning-big.png"
              alt="toybox MMW"
              style={imgWidth}
            />
          </Col>
          <Col lg="6">
            <img
              src="/home_page/testi_user.JPG"
              alt="MMW testimonials"
              style={devider}
            />
            <img
              src="/home_page/five-stars.png"
              alt="MMW testimonials"
              style={devider}
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
            <img
              src="/home_page/toybox-early-learning-big.png"
              alt="toybox MMW"
              style={imgWidth}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </PrimaryLayout>
)

export default Index
