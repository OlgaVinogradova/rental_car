import React from 'react';
import { useState } from 'react';
import Button from '../button/Button';

import './Slider.scss'



const SliderCard = ({ imgPath, title, text, btnColor }) => {

  const [inHover, setHover] = useState(false);

  let stylesBtnHover = {
    background: btnColor,
    boxShadow: '0 0 0 128px rgba(0, 0, 0, 0.2) inset'
  }

  let stylesBtn = {
    background: btnColor
  }

  let stylesImg = {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(' + imgPath + ')',
  }

  return (

    <div className='slider__img' style={stylesImg}>
      <div className='sliderCard_content'>
        <div className='content'>
          <div className='content__title'>{title}</div>
          <div className='content__subtitle'>
            {text}
          </div>
          <Button className='btn__slider'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

            style={inHover ? stylesBtnHover : stylesBtn}
          >Подробнее</Button>
        </div>
      </div>
    </div >

  )
}

export default SliderCard
