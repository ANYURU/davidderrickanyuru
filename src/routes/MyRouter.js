import React from 'react'
import { 
  BrowserRouter,
  Router,
  Route,
  Routes
} from 'react-router-dom'

import Contact from '../components/Contact'
import Home from '../components/Home'
import MyWork from '../components/MyWork'
import Articles from '../components/Articles'



function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='mywork' element={<MyWork/>}/>
        <Route path='articles' element={<Articles />}/>
      </Routes>
    </BrowserRouter>
    // <div>MyRouter</div>
  )
}

export default MyRouter