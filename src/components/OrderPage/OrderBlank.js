import React from 'react';
import BookingOrderBlank from '../Booking/BookingOrderBlank';
import ContentOrderBlank from '../Content/ContentOrderBlank/ContentOrderBlank';
import Header from '../Header/Header'

import './OrderPage.scss';

const OrderBlank = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <div className='breadcrumbs__wrap'>
        <div className='breadcrumbs__container'>
          <span className='bc__text'>Заказ номер RU58491823</span>
        </div>
      </div>
      <div className='content'>
        <ContentOrderBlank />
        <BookingOrderBlank />
      </div>
    </div>
  )
}

export default OrderBlank
