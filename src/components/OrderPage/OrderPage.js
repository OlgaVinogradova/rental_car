import React from 'react'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import OrderContent from '../OrderContent/OrderContent'

import './OrderPage.scss'

const OrderPage = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <OrderContent />
    </div>
  )
}

export default OrderPage
