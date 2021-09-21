import React from 'react'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import BookingOption from '../Booking/BookingOption'

import './OrderPage.scss';
import ContentOption from '../Content/ContentOptions/ContentOption';


const Options = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <div className='content'>
        <ContentOption />
        <BookingOption />

      </div>
    </div>
  )
}

export default Options
