import React from 'react'
import '../../app.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="hover:text-blue-400 block text-center my-auto">
        <NavLink to="/">Baleyadana</NavLink>
      </div>
      <div>
        <div className="flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
