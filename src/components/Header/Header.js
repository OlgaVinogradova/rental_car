import React from 'react';
import LocationIcons from '../svg/locationIcons';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='name'>Need for drive</div>
      <div className='location'>
        <LocationIcons />
        <span className='location__name'>Ульяновск</span>
      </div>
    </div>
  )
}

export default Header
