import React from 'react'
import Header from './Header'
import MyWork from './MyWork'
import Articles from './Articles'
import Contact from './Contact'
import NavBar from './NavBar'

function Page() {
  return (
    <div className="container">
        <div className='nav'>
            <NavBar />
        </div>
        <div className='content'>
            <section id='header' style={{height:'400px', backgroundColor:'aliceblue'}}>
                <Header />
            </section>
            <section id='mywork' style={{height:'400px', backgroundColor:'lightgrey'}}>
                <MyWork />
            </section>
            <section id='articles' style={{height:'400px', backgroundColor:'aliceblue'}}>
                <Articles />
            </section>
            <section id='contact' style={{height:'400px', backgroundColor:'lightgrey'}}>
                <Contact />
            </section>
        </div>
    </div>
  )
}

export default Page