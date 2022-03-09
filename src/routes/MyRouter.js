import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Page from '../components/Page'

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}/>
        <Route path='page' element={<Page />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter