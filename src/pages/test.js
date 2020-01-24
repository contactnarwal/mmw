import React from "react"
import { navigate } from "gatsby"
const test = () => {
  return (
    <>
      <h1>this is atest page</h1>
      <button onClick={() => navigate("/")}>Home Page</button>{" "}
    </>
  )
}
export default test
