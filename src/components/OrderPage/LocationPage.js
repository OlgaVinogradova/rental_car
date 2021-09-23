import React from 'react';
import BookingLocation from '../Booking/BookingLocation';
import ContentLocation from '../Content/Location/ContentLocation';
import OrderPage from './OrderPage';

import './OrderPage.scss'


const LocationPage = () => {
  return (
    <OrderPage>
      <ContentLocation />
      <BookingLocation />
    </OrderPage>
  )
}

export default LocationPage
