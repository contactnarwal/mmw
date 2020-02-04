import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faTag } from "@fortawesome/free-solid-svg-icons"
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
            <FontAwesomeIcon icon={faPhoneAlt} /> 1300769302
          </a>
        </Col>
      </Row>
      <hr />
      <Row className={styles.top_row}>
        <Col lg="3" sm="6">
          <img src="new-year-mmw-logo.png" alt="Make My Website New Year" />
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
                <Nav.Link as={Link} to="/contact">
                  Our Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
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
            <FontAwesomeIcon icon={faTag} />
            &nbsp; Easy Engagment
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)
