import React from "react"
import { Link } from "gatsby"

function PostLink(props) {
  return (
    <div className="postLink">
      <Link to={props.node.fields.slug}>
        <h3>{props.node.frontmatter.title} </h3>
        <div className="postLinkDate">{props.node.frontmatter.date}</div>
      </Link>
    </div>
  )
}

export default PostLink
