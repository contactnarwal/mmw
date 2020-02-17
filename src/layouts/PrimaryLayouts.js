import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
const PrimaryLayout = props => (
  <>
    <Header isHomePage={props.isHomePage} />
    {props.children}
    <Footer />
  </>
)
export default PrimaryLayout
