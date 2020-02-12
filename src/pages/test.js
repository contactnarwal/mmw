import React from "react"
import { navigate } from "gatsby"
const test = () => {
  const array1 = [5, 8, 130, 441223]

  const found = array1.find(element => element > 10)

  console.log(found)
  return (
    <>
      <h1>this is atest page</h1>
      <button onClick={() => navigate("/")}>Home Page</button>{" "}
    </>
  )
}
export default test
