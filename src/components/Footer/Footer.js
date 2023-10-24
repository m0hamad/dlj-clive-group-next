import React from 'react'
import './footer.css'
import Contact from './Contact'
import Links from './Links'
import { NAV_ITEMS } from '../../utils/constants'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer id='footer' className='footer' >
            <div className='footer-content-wrapper' >
                <Contact />
                <Links />
            </div>
            <hr className='footer-divider' />
            <div className='footer-nav-items' >
                {
                    NAV_ITEMS.map(navItem =>
                        <Link
                            className='footer-nav-item'
                            key={navItem.name}
                            href={navItem.path}
                            onClick={() => window.scrollTo({ top: 0 })}
                        >
                            {navItem.name}
                            <div className='nav-item-underline' />
                        </Link>
                    )
                }
            </div>
        </footer>
    )
}

export default Footer