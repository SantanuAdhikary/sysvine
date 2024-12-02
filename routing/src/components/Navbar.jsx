import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <ul>
            <Link to="/"> <li>Login</li></Link>
            <Link to="about"> <li>About</li></Link>
            <Link to="contact"> <li>Contact</li></Link>
           
        </ul>
    </div>
  )
}

export default Navbar