import React from "react"

function PostLink(props) {
  return (
    <a href={props.node.fields.slug} className="postLink">
      <h3>{props.node.frontmatter.title} </h3>
      <div className="postLinkDate">{props.node.frontmatter.date}</div>
    </a>
  )
}

export default PostLink
