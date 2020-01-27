import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayouts"
export default () => (
  <>
    <PrimaryLayout column="8" sidebar="4">
      <Post
        title="First post"
        image="bootstrap-4-beta-whats-new.jpg"
        content="first content is here"
      ></Post>
      <Post
        title="First post"
        image="bootstrap-4-beta-whats-new.jpg"
        content="first content is here"
      ></Post>
      <Post
        title="First post"
        image="bootstrap-4-beta-whats-new.jpg"
        content="first content is here"
      ></Post>
      <Post
        title="First post"
        image="bootstrap-4-beta-whats-new.jpg"
        content="first content is here"
      ></Post>
      <Post
        title="First post"
        image="bootstrap-4-beta-whats-new.jpg"
        content="first content is here"
      ></Post>
    </PrimaryLayout>
  </>
)
