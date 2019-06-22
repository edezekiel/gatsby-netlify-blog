import React from "react"
import { Link } from "gatsby"

function PostLink(props) {
  return (
    <div className="postLink">
      <Link to={props.node.fields.slug}>
        <h3>
          {props.node.frontmatter.title}{" "}
          <span className="postLinkDate"> - {props.node.frontmatter.date}</span>
        </h3>
        <p>{props.node.excerpt}</p>
      </Link>
    </div>
  )
}

export default PostLink
