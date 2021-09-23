import React from 'react'
import BookingSubtotal from '../Booking/BookingSubtotal';
import ContentSubtotal from '../Content/ContentSubtotal/ContentSubtotal';
import OrderPage from './OrderPage';

import './OrderPage.scss';



const Subtotal = () => {
  return (
    <OrderPage>
      <ContentSubtotal />
      <BookingSubtotal />
    </OrderPage>
  )
}

export default Subtotal
