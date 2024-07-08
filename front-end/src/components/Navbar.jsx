import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/transaction">
      <h1>Budget App</h1>
      </Link>
        <Link to='/transaction/new'>
        <button>NEW TRANSACTION</button>
        </Link>
    </nav>
  )
}

export default Navbar