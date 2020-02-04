import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allWordpressPost(limit: 2) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

export default ComponentName
