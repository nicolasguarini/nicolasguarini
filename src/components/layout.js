import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './layout.css'


const Layout = (props) => {
    return(
        
        <div className="wrapper">
            <Navbar />
                  {props.children}
            <Footer />
        </div>
    )
}

export default Layout