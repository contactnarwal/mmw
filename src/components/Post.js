import React from "react"
import { Card, Button } from "react-bootstrap"
const Post = props => {
  return (
    <Card>
      <a href={props.readMore}>
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.alt || "default"}
        />
      </a>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></Card.Text>
        <Button variant="primary" href={props.readMore}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  )
}
export default Post
