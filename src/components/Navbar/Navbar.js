import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavbarData } from './NavbarData';
import Inst from '../svg/inst';
import Facebook from '../svg/facebook';
import Telegram from '../svg/telegram';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className="burgerMenu"
        role="button"
        onClick={handleClick}>
        <span className={click ? 'open' : 'close'}></span>
        <span className={click ? 'open' : 'close'}></span>
        <span className={click ? 'open' : 'close'}></span>
        <span className={click ? 'open' : 'close'}></span>
      </div>
      <div className={click ? 'menu_active' : 'menu'}>
        <ul className='nav_menu'>
          {NavbarData.map((link, index) =>
            <li className='nav_link' key={index}>
              <Link
                className='link'
                to={link.path}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            </li>)}
        </ul>
        <div className='contacts'>
          <a className='contacts_icons'>
            <Telegram />
          </a>
          <a className='contacts_icons'>
            <Facebook />
          </a>
          <a className='contacts_icons'>
            <Inst />
          </a>
        </div>
      </div>
      <button className='nav_btn'>Eng</button>
    </nav>
  )
}

export default Navbar
