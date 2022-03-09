import React from 'react'
import { HashLink } from 'react-router-hash-link'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <HashLink to={'/'}>Home</HashLink>
      <HashLink to={'/page#mywork'}>Mywork</HashLink>
      <HashLink to={'/page#articles'}>Articles</HashLink>
      <HashLink to={'/page#contact'}>Contact</HashLink>
    </nav>
  )
}

export default NavBar