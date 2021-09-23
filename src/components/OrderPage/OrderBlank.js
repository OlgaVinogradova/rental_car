import React from 'react';
import BookingOrderBlank from '../Booking/BookingOrderBlank';
import ContentOrderBlank from '../Content/ContentOrderBlank/ContentOrderBlank';
import Header from '../Header/Header'

import './OrderPage.scss';

const OrderBlank = ({ children }) => {
  return (
    <div className='op__wrap'>
      <Header />
      <div className='breadcrumbs__wrap'>
        <div className='breadcrumbs__container'>
          Заказ номер RU58491823
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
