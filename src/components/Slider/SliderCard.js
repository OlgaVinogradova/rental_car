import React from 'react';

import './Slider.scss'

const SliderCard = ({
  title,
  text,
  imgPath,
  btncolor
}) => {
  // const imgStyle = {
  //   background: "url(img/parking.png)",
  // };

  const btnStyle = {
    background: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
  };

  return (
    <div className='sliderCard_wrap'>
      <div className='arrow__btn'>
        <div className='arrow__left'>
        </div>
      </div>
      <div className='sliderCard_content'>
        <div className='content'>
          <div className='content__title'>{title}</div>
          <div className='content__subtitle'>
            Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
          </div>

          <div className='content__btn'><button className='btn' style={btnStyle}>Подробнее</button></div>
        </div>
        <div className='sliderCard_content__ellipse'>
          <button className='ellipse'></button>
          <button className='ellipse'></button>
          <button className='ellipse'></button>
          <button className='ellipse'></button>
        </div>
      </div>
      <div className='arrow__btn'>
        <div className='arrow__right'>
        </div>
      </div>
    </div>
  )
}

export default SliderCard
