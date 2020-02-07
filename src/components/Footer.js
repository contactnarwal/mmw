import React from "react"
import FooterStyles from "./Footer.module.css"
import { Row, Col, Container } from "react-bootstrap"
const Footer = () => (
  <footer style={{ marginTop: "50px" }}>
    <Container>
      <Row>
        <Col lg="3" sm="6">
          <h3>Office</h3>
          <p>129 A Watton Street Werribee Victoria 3030, Australia</p>
          <p>1/4A Bessemer St, Blacktown NSW 2148</p>
        </Col>
        <Col lg="3" sm="6">
          <h3>Get In Touch</h3>
          <p>
            {" "}
            <a href="mailto:info@makemywebsite.com.au">
              info@makemywebsite.com.au
            </a>
          </p>
          <p>
            <a href="tel:1300769302">1300769302</a>
          </p>
        </Col>
        <Col lg="3" sm="6">
          <h3>Business Hours</h3>
          <p>Mon-Fri : 9:00am - 7:00pm Sat : 9:00am - 1:00pm Sun : Closed</p>
        </Col>
        <Col lg="3" sm="6">
          <h3>Our Services</h3>
          <ul className={FooterStyles.footer_menu}>
            <li>
              <a href="https://www.makemywebsite.com.au/web-designer-melbourne/">
                Web Designer Melbourne
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-design-parramatta/">
                Web Design Parramatta
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-design-blacktown/">
                Web Design Blacktown
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-designers-sunshine/">
                Expert Web Designers Sunshine
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-design-geelong/">
                Quality Web Design Geelong
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-design-penrith/">
                Quality Provider Web Design Penrith
              </a>
            </li>
            <li>
              <a href="https://www.makemywebsite.com.au/web-design-castle-hill/">
                Affordable Web design Castle Hill
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col lg="6"></Col>
        <Col lg="6">
          <p
            style={{
              fontSize: "12px",
              borderBottom: "1px dashed",
              paddingBottom: "5px",
              marginBottom: "10px",
              lineHeight: "20px",
            }}
          >
            Make My Website offers the money back guarantee if you are not happy
            with the 1st draft of your website or you change your mind within 14
            days. However, there is no refund after this stage.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)
export default Footer
