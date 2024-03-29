'use client'
import React, { useContext } from 'react'
import './layout.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'
import AppContext from '@/context/AppContext'

const Layout = ({ children }) => {

    const { pathname } = useContext(AppContext)

    return (
        <div
            className='layout'
            style={{
                backgroundImage: pathname === '/' ? "url('/images/background-3.png')" : "url('/images/background.png')",
                // backgroundImage: "url('/images/background.png')",
                backgroundSize: '24rem',
                backgroundRepeat: 'repeat'
            }}
        >
            <NavBar />
            <section className='section'>
                {children}
            </section>
            <ScrollUpButton />
            <Footer />
        </div >
    )
}

export default Layout