import React from 'react'
import './navbar.css'
import Link from 'next/link'

const NavBarLogo = () => {
    return (
        <Link target='_blank' href={`https://www.ualberta.ca/chemistry/index.html`}>
            <img
                className='chem-department-logo'
                src="/images/chem-department-logo.png"
                alt="University of Alberta Department of Chemistry Logo"
            />
        </Link>
    )
}

export default NavBarLogo