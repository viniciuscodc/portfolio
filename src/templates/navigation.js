import * as React from "react"
import {Link} from "gatsby"
import './../style/navigation.scss'

// data

// markup
const Navigation = () => {
  return (
      <nav class='nav-header'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  )
}

export default Navigation
