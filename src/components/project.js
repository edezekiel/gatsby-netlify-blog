import React from 'react'

const Project = (props) => {
  return (
    <a className="project" href={props.project.link}>
      <h3>{props.project.title}</h3>
<img src={props.project.img} alt="boohoo"/>

      <p>{props.project.description}</p>
    </a>
  )
}

export default Project
