import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Nav = () => (
  <nav>
    <Link to="/"><Image/></Link>
    <Link to="/"><h2>Blog</h2></Link>
    <Link to="/page-2/"><h2>About</h2></Link>
  </nav>
)

export default Nav
