import React from 'react'
import BookingLocation from '../Booking/BookingLocation/BookingLocation'
import ContentLocation from '../Content/Location/ContentLocation'

import './OrderContent.scss'
const OrderContent = () => {
  return (
    <div className='content'>
      <ContentLocation />
      <BookingLocation />
    </div>
  )
}

export default OrderContent
