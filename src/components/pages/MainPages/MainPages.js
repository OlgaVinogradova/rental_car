import React from 'react';
import Footer from '../../Footer/Footer';
import LocationIcon from '../../svg/locationIcon';
import './MainPages.scss';

function MainPages() {
  return (
    <div className='mp__wrap'>
      <div className='mp__container'>
        <div className='mp__top'>
          <div className='name'>Need for drive</div>
          <div className='location'>
            <LocationIcon />
            <span className='location__name'>Ульяновск</span>
          </div>
        </div>
        <div className='mp__content'>
          <div className='mp__content__title'>Каршеринг</div>
          <div className='mp__content__name'>Need for drive</div>
          <h2 className='mp__content__subtitle'>Поминутная аренда авто твоего города</h2>
        </div>
      </div>
      <div className='mp__btn'><button className='btn'>Забронировать</button></div>
      <Footer />
    </div>
  )
}

export default MainPages
