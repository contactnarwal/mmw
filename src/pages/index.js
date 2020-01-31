import React from "react"
import Post from "../components/Post"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayouts"
export default ({ data }) => {
  return (
    <>
      <PrimaryLayout column="8" sidebar="4">
        {data.allWordpressPost.nodes.map((node, dev) => (
          <Post
            title={node.title}
            image={node.featured_media.source_url}
            content={node.excerpt}
            readMore={node.slug}
            key={dev}
          ></Post>
        ))}
      </PrimaryLayout>
    </>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
          slug
        }
      }
    }
  }
`
