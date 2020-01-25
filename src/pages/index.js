import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
export default () => (
  <>
    <Header></Header>
    <Post
      title="First post"
      image="bootstrap-4-beta-whats-new.jpg"
      content="first content is here"
    ></Post>
    <Footer></Footer>
  </>
)
