import React from 'react';
import { useState } from 'react';
import { PagesData } from '../helper/PagesData';
import SliderCard from './SliderCard';
import './Carousel.scss'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lenght = PagesData.lenght;

  const nextSlide = () => {
    setActiveIndex(activeIndex === lenght ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? lenght : activeIndex - 1);
  };

  return (
    <div className='carousel'>
      {PagesData.map((slide, index) => {
        return (
          <div
            className={index === activeIndex ? 'slider active' : 'slider'}
            key={index}
          >
            {index === activeIndex && (
              <SliderCard
                title={slide.title}
                text={slide.text}
                imgPath={slide.imgPath}
                btnColor={slide.btnColor}
              />
            )}
          </div>
        )
      })}
      <div className='arrow__btn'
        role="button"
        onClick={prevSlide}
      >
        <div className='arrow__left' />
      </div>

      <div className='arrow__btn right'
        role="button"
        onClick={nextSlide}
      >
        <div className='arrow__right' />
      </div>

      <div className='all-dots'>
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? 'dot active-dot' : 'dot'}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        ))}
      </div>

    </div>
  )
}

export default Carousel
