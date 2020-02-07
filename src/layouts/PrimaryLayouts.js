import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
const PrimaryLayout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)
export default PrimaryLayout
