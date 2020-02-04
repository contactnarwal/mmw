import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"
const PrimaryLayout = props => (
  <>
    <Header />
    <Container>{props.children}</Container>
    <Footer />
  </>
)
export default PrimaryLayout
