import React, { useState } from "react"
import styled from "@emotion/styled"

import { IoIosHelpCircleOutline, IoIosAdd } from "react-icons/io"

const Button = styled.button({
  backgroundColor: "#e8e8e8",
  color: "#3e3e3e",
  cursor: "pointer",
  padding: "20px 50px",
  width: "100%",
  textAlign: "left",
  border: "none",
  outline: "none",
  transition: "0.4s",
  marginBottom: "10px",
  position: "relative",
  fontSize: "21px",

  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
  "&:focus": {
    outline: "none",
  },
})

const helpStyle = {
  fontSize: "40px",
}

const Content = styled.div(
  {
    padding: "20px 57px",
    textAlign: "justify",
  },
  ({ active }) => ({
    display: active ? "block" : "none",
  })
)

const Title = ({ children, ...props }) => (
  <Button {...props}>
    <IoIosHelpCircleOutline style={helpStyle} />
    &nbsp;&nbsp;&nbsp;
    {children}
    <IoIosAdd style={{ float: "right", fontSize: "40px" }} />
  </Button>
)

const Accordion = ({ title, children, defaultActive = false }) => {
  const [active, setActive] = useState(defaultActive)

  return (
    <>
      <Title onClick={() => setActive(!active)}>{title}</Title>
      <Content active={active}>{children}</Content>
    </>
  )
}

export default Accordion
