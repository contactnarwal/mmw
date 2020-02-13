import React from "react"
import { navigate } from "gatsby"

import PrimaryLayout from "../layouts/PrimaryLayouts"
const devender = (a, b) => {
  return (
    <img
      src="home_page/Developing-Programming-And-Coding-mmw.jpg"
      alt="home page"
    />
  )
}
const test = () => {
  return (
    <>
      <PrimaryLayout>
        {devender(5, 10)}
        <h1>this is atest page</h1>
        <button onClick={() => navigate("/")}>Home Page</button>
      </PrimaryLayout>
    </>
  )
}
export default test
