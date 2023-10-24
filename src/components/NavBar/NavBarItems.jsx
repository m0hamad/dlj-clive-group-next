import React, { useContext } from 'react'
import { NAV_ITEMS, PINK, TABLET_WIDTH } from '../../utils/constants'
import './navbar.css';
import AppContext from '../../context/AppContext';
import Link from 'next/link';

const NavBarItems = ({ setIsOpen }) => {

    const { windowWidth, pathname } = useContext(AppContext);

    return (
        <div
            className='nav-items'
            style={{
                flexDirection: windowWidth <= TABLET_WIDTH && 'column',
            }}
        >
            {
                NAV_ITEMS.map(navItem =>
                    <Link
                        className='nav-item'
                        key={navItem.name}
                        href={navItem.path}
                        onClick={() => setIsOpen(c => !c)}
                    >
                        {navItem.name}
                        <div
                            style={{
                                width: pathname === navItem.path && '100%',
                            }}
                            className='nav-item-underline' />
                    </Link>
                )
            }
            <a
                className='nav-item'
                onClick={() => {
                    document.getElementById('footer').scrollIntoView();
                    setIsOpen(c => !c)
                }}
            >
                Contact & Links
                <div className='nav-item-underline' />
            </a>
        </div>
    )
}

export default NavBarItems