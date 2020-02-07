import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container, Button } from "react-bootstrap"
const devider = {
  margin: "auto",
  display: "block",
}
const headerCenter = {
  textAlign: "center",
  fontWeight: " 600",
  fontSize: "72px",
}
const bg = "why-choose-bg.jpg"
const imgWidth = {
  width: "100%",
}
const Index = () => (
  <PrimaryLayout>
    <Row>
      <Col>
        <img src="/header.JPG"></img>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col>
          <h1 style={headerCenter}>About Make My Website</h1>
          <img
            src="/devider.jpg"
            alt="devider"
            style={{ margin: "auto", display: "block" }}
          />
          <h6 style={devider}>
            We Don’t Just Build Websites, We Build Your Online Business!
          </h6>
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
    <div style={{ backgroundImage: "url(" + bg + ")" }}>
      <Container>
        <Row>
          <Col>
            <h2 style={headerCenter}>Why Choose Us</h2>
            <img src="/devider.jpg" alt="devider" style={devider} />
          </Col>
        </Row>
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
    <Row>
      <Col lg="3">
        <h2 style={headerCenter}>Our Service</h2>
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
        <img src="/home_page/services.JPG" style={imgWidth} />
      </Col>
    </Row>
    <div style={{ background: "url('/home_page/make-my-website-slide.jpg')" }}>
      <Row>
        <Col>
          <h2 style={headerCenter}>Happy Clients</h2>
          <img src="/devider.jpg" alt="devider" style={devider} />
          <br />
          <br />
          <h5 style={{ textAlign: "center" }}>
            5 Star Rated Web Design Agency.
          </h5>
        </Col>
      </Row>
    </div>
  </PrimaryLayout>
)

export default Index
