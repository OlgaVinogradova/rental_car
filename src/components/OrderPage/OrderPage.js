import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import OrderContent from '../OrderContent/OrderContent'

import './OrderPage.scss'

const OrderPage = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Menu />
      <OrderContent />
      <Footer />
    </div>
  )
}

export default OrderPage
