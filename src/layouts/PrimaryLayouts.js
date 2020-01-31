import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Row, Col, Container } from "react-bootstrap"
const PrimaryLayout = props => (
  <>
    <Header />
    <Container>
      <Row>
        <Col sm={props.column}>{props.children}</Col>
      </Row>
      <Footer />
    </Container>
  </>
)
export default PrimaryLayout
