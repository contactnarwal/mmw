import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { FaPhoneVolume, FaTag } from "react-icons/fa"
import styles from "./Header.module.css"
export default props => (
  <header>
    <Container>
      <Row className={styles.first_row}>
        <Col>
          <p className={styles.header_p}>
            Complete Web Solution Services Australia
          </p>
        </Col>
        <Col className={styles.header_top_right}>
          <a href="tel:9802260750">
            <FaPhoneVolume /> 1300769302
          </a>
        </Col>
      </Row>
      <hr />
      <Row className={styles.top_row}>
        <Col lg="3" sm="6">
          <a href="/">
            <img src="/new-year-mmw-logo.png" alt="Make My Website New Year" />
          </a>
        </Col>
        <Col lg="7" sm="6">
          <Navbar bg="light" expand="lg" className={styles.nav}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>

                <Nav.Link as={Link} to="/blog">
                  Blog and News
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col lg="2">
          <div className={styles.easy}>
            <FaTag />
            &nbsp; Easy Engagment
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)
