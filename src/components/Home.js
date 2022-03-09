import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './NavBar'

function Home() {
  return (
    <div className='container'>
      <NavBar />
      <div className='content'>
        {/* <Outlet /> */}

      </div>
    </div>
  )
}

export default Home