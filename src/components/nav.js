import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Nav = () => (
  <nav>
    <Link to="/"><Image/></Link>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </nav>
)

export default Nav
