import React from 'react'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import BookingLocation from '../Booking/BookingLocation/BookingLocation'
import ContentLocation from '../Content/Location/ContentLocation'

import './LocationPage.scss'

const LocationPage = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <div className='content'>
        <ContentLocation />
        <BookingLocation />
      </div>
    </div>
  )
}

export default LocationPage
