import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Button from '../../button/Button';
import './MainPages.scss';

const MainPages = () => {
  return (
    <div className='mp__wrap'>
      <Header />
      <div className='mp__container'>
        <div className='mp__content'>
          <div className='mp__content__title'>Каршеринг</div>
          <div className='mp__content__name'>Need for drive</div>
          <h2 className='mp__content__subtitle'>Поминутная аренда авто твоего города</h2>
        </div>
      </div>
      <div className='mp__btn'>
        <Button className='btn'>Забронировать</Button>
      </div>
      <Footer />
    </div>
  )
}

export default MainPages
