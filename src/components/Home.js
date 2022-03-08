import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import NavBar from './NavBar'

function Home() {
  return (
    <div>
      <Link to={'/home'}>home</Link>
      <Link to={'/about'}>about</Link>
      <Link to={'/mywork'}>Mywork</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/articles'}>articles</Link>
      {/* <Outlet /> */}
    </div>
  )
}

export default Home