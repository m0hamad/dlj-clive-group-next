'use client'
import React from 'react'
import './layout.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'

const Layout = ({ children }) => {
    return (
        <div className='layout' >
            <NavBar />
            <section className='section'>
                {children}
            </section>
            <ScrollUpButton />
            <Footer />
        </div>
    )
}

export default Layout