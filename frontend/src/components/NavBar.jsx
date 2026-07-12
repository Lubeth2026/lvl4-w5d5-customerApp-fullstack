
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <div>
        <nav> 
        <h2>Customer App</h2>
        <Link to="/">Home</Link>
        {"|"}
        <Link to="/create">Create</Link>
        {"|"}
        <Link to="/history">History</Link>
        </nav>
    </div>
  )
}

export default NavBar