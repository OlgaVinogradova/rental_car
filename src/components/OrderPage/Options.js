import React from 'react'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import BookingOption from '../Booking/BookingOption'

import './OrderPage.scss';
import ContentOption from '../Content/ContentOptions/ContentOption';
import OrderPage from './OrderPage';


const Options = () => {
  return (
    <OrderPage>
      <ContentOption />
      <BookingOption />
    </OrderPage>
  )
}

export default Options
