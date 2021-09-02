import React from 'react'
import './Slider.scss'
import Carousel from './Carousel'

const Slider = () => {
  return (
    <div className='slider_wrap'>
      <Carousel />
    </div>
  )
}

export default Slider


// import React from 'react';
// import { useState } from 'react';
// import { PropTypes, arrayOf, string } from 'prop-types';
// import { PagesData } from '../helper/PagesData';
// import ArrowPrev from '../Arrow/ArrowPrev';
// import ArrowNext from '../Arrow/ArrowNext';
// // import SliderCard from './SliderCard';

// import './Slider.scss'

// const Slider = () => {
//   const [currPage, setCurrPage] = useState(0);
//   const lenght = PagesData.lenght;

//   // if (Array.isArray(slides) || slides.lenght <= 0) {
//   //   return null;
//   // }

//   const nextSlide = () => {
//     setCurrPage(currage === lenght - 1 ? 0 : currPage + 1);
//   };

//   const prevSlide = () => {
//     setCurrPage(currPage === 0 ? lenght - 1 : currPage - 1);
//   };

//   return (
//     <div className='slider_wrap'>
//       <div className='sliderCard_wrap'>


//         {PagesData.map((slide, index) => {
//           return (
//             <div
//               className={index === currPage ? 'slide active' : 'slide'}
//               key={index}
//             >
//               {index === currPage && (
//                 // <div className='slider' style={{ backgroundImage: `url(${slide.imgPath})` }}>
//                 // </div>
//                 <img src={slide.imgPath} className='img' />
//               )}

//             </div>
//           )
//         })}
//         {/* <SliderCard /> */}
//         <ArrowPrev onClick={prevSlide} />
//         <ArrowNext onClick={nextSlide} />
//       </div>
//     </div>
//   )
// };

// Slider.propTypes = {
//   slides: arrayOf(string),
//   onClick: PropTypes.func,
//   lenght: PropTypes.string,
// };

// export default Slider
