import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { FaTag } from "react-icons/fa"
import styles from "./Header.module.css"
import WhiteLogo from "../images/logo-make-my-light.png"

const Header = props => (
  <header className={props.isHomePage ? styles.header_css : " "}>
    <Container>
      <hr />
      <Row className={styles.top_row}>
        <Col lg="3" sm="6">
          <a href="/">
            {props.isHomePage ? (
              <img src={WhiteLogo} alt="Make My Website New Year" />
            ) : (
              <img
                src="/new-year-mmw-logo.png"
                alt="Make My Website New Year"
              />
            )}
          </a>
        </Col>
        <Col lg="7" sm="6">
          <Navbar
            bg="light"
            expand="lg"
            className={props.isHomePage ? styles.home_nav : styles.nav}
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/faq">
                  Faq
                </Nav.Link>
                <Nav.Link as={Link} to="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/our-service">
                  Services
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
export default Header
