import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

import './OrderPage.scss'

const OrderPage = () => {
  return (
    <div className='op__wrap'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default OrderPage
