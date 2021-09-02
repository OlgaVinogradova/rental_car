import React from 'react';
import Button from '../button/Button';

import './Slider.scss'

const SliderCard = ({ imgPath, title, text, btnColor }) => {

  return (

    <div className='slider__img' style={{ backgroundImage: `url(${imgPath})` }}>
      <div className='sliderCard_content'>
        <div className='content'>
          <div className='content__title'>{title}</div>
          <div className='content__subtitle'>
            {text}
          </div>
          <Button className='btn__slider'
            style={{ background: btnColor }}
          >Подробнее</Button>
        </div>
      </div>
    </div>

  )
}

export default SliderCard
