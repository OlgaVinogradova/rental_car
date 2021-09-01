import React from 'react';
import Button from '../button/Button';

import './Slider.scss'

const SliderCard = () => {
  // const btnBackground = {
  //   background: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
  // };

  return (
    <div className='sliderCard_wrap'>
      <div className='arrow__btn'>
        <div className='arrow__left' />
      </div>
      <div className='sliderCard_content'>
        <div className='content'>
          <div className='content__title'>Бесплатная парковка</div>
          <div className='content__subtitle'>
            Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
          </div>

          {/* <div className='content__btn'> */}
          <Button className='btn__slider'>Подробнее</Button>
          {/* // <button className='btn__slider' style={btnBackground}>Подробнее</button> */}
          {/* </div> */}
        </div>
        <div className='sliderCard_content__ellipse'>
          <button className='ellipse' />
          <button className='ellipse' />
          <button className='ellipse' />
          <button className='ellipse' />
        </div>
      </div>
      <div className='arrow__btn'>
        <div className='arrow__right' />
      </div>
    </div>
  )
}

export default SliderCard
