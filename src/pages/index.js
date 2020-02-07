import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container, Button } from "react-bootstrap"
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
const Index = () => (
  <PrimaryLayout>
    <Row style={{ margin: "20px 0px 0px 0px" }}>
      <Col>
        <img src="/header.JPG" alt="MMW website"></img>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col>
          <h1 style={headerCenter}>
            About <span style={headingPart}> Make My Website</span>
          </h1>
          <img
            src="/devider.jpg"
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
            <img src="/devider.jpg" alt="devider" style={devider} />
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
    <Row>
      <Col lg="3">
        <h2 style={headerCenter}>
          Our <span style={headingPart}>Service </span>
        </h2>
        <img src="/devider.jpg" alt="devider" style={devider} />
        <p style={{ textAlign: "center" }}>
          Elevate Your Businesses Capabilities With One Step. We offer a wide
          variety of website design services.
        </p>
        <Button variant="danger" style={{ display: "block", margin: "auto" }}>
          View All Services
        </Button>
      </Col>
      <Col lg="9">
        <img
          src="/home_page/services.JPG"
          style={imgWidth}
          alt="MMW services"
        />
      </Col>
    </Row>
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
            <img src="/devider.jpg" alt="devider" style={devider} />
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
