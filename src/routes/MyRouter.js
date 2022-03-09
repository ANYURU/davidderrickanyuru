import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Contact from '../components/Contact'
import Home from '../components/Home'
import MyWork from '../components/MyWork'
import Articles from '../components/Articles'
import Header from '../components/Header'



function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}>
          <Route path='home' element={<Header />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='mywork' element={<MyWork />}/>
          <Route path='articles' element={<Articles />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter