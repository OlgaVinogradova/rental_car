import React from 'react'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import ContentModel from '../Content/ContentModel/ContentModel'
import BookingModel from '../Booking/BookingModel'

import './OrderPage.scss';

const Model = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <div className='content'>
        <ContentModel />
        <BookingModel />
      </div>
    </div>
  )
}

export default Model
