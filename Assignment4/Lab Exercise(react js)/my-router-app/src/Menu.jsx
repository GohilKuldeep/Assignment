import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Menu