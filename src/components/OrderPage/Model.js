import React from 'react';
import ContentModel from '../Content/ContentModel/ContentModel';
import BookingModel from '../Booking/BookingModel';
import OrderPage from './OrderPage';

import './OrderPage.scss'


const Model = () => {
  return (
    <OrderPage>
      <ContentModel />
      <BookingModel />
    </OrderPage>
  )
}

export default Model
