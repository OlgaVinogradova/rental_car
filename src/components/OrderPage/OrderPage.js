import React from 'react';
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Booking from '../Booking/Booking'

import './OrderPage.scss';

const OrderPage = ({ children }) => {
  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default OrderPage
