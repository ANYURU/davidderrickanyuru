import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <Link to={'/home'}>home</Link>
      <Link to={'/about'}>about</Link>
      <Link to={'/mywork'}>Mywork</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/articles'}>articles</Link>
    </nav>
  )
}

export default NavBar