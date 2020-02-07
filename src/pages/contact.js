import React from "react"

import { Form, Button, Container, Row, Col } from "react-bootstrap"
import {
  FaEnvelope,
  FaPhoneVolume,
  FaClock,
  FaAddressBook,
} from "react-icons/fa"

import PrimaryLayout from "../layouts/PrimaryLayouts.js"

const headerCenter = {
  textAlign: "center",
  fontWeight: "400",
  fontSize: "72px",
}

const Contact = () => (
  <>
    <PrimaryLayout>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1 style={headerCenter}>Get In Touch With Us</h1>
            <img
              src="/devider.jpg"
              alt="devider"
              style={{ margin: "auto", display: "block" }}
            />
            <br /> <br />
            <p style={{ textAlign: "center" }}>
              <FaEnvelope style={{ color: "red" }} />
              &nbsp; E-Mail : info@makemywebsite.com.au
            </p>
            <p>
              <FaPhoneVolume style={{ color: "red" }} /> &nbsp; Phone :
              1300769302
            </p>
            <p>
              <FaClock style={{ color: "red" }} /> &nbsp; Opening Hours :
              09:00am-07:00pm
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg="6" style={{ margin: "auto" }}>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="Name.." />
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Email.." />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <Form.Control
                    as="textarea"
                    placeholder="Message.."
                    row="50"
                  />
                  <br></br>
                  <br></br>
                  <Button
                    variant="danger"
                    type="submit"
                    style={{ margin: "auto", display: "block" }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ background: "#f1efef" }}>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <iframe
              title="MMW address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272.8394520911547!2d144.6606339043032!3d-37.90399179972431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad685a5ce1bf149%3A0xb7e090f90526f26c!2s129A+Watton+St%2C+Werribee+VIC+3030!5e0!3m2!1sen!2sau!4v1535941986673"
              width="600"
              height="450"
              style={{ border: "0px", pointerEvents: "none" }}
              allowfullscreen=""
            ></iframe>
          </Col>
          <Col>
            <FaAddressBook
              style={{
                fontSize: "40px",
                color: "red",
                margin: "auto",
                display: "flex",
              }}
            />
            <h5 style={{ textAlign: "center" }}>Address</h5>
            <p style={{ textAlign: "center", fontWeight: "500" }}>
              129A Watton Street <br />
              Werribee
              <br />
              Victoria 3030, Australia
            </p>
          </Col>
        </Row>

        <Row style={{ alignItems: "center" }}>
          <Col>
            <FaAddressBook
              style={{
                fontSize: "40px",
                color: "red",
                margin: "auto",
                display: "flex",
              }}
            />
            <h5 style={{ textAlign: "center" }}>Address</h5>
            <p style={{ textAlign: "center", fontWeight: "500" }}>
              1/4A Bessemer St
              <br />
              Blacktown <br />
              NSW 2148
            </p>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.141622502588!2d150.90772981528684!3d-33.75700602069675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298e22ea60125%3A0x8390334ddfe65f4a!2s1%2F4A+Bessemer+St%2C+Blacktown+NSW+2148%2C+Australia!5e0!3m2!1sen!2sin!4v1565162918101!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0px", pointerEvents: "none" }}
              title="MMW contact us"
              allowfullscreen=""
            ></iframe>
          </Col>
        </Row>
      </div>
    </PrimaryLayout>
  </>
)

export default Contact
