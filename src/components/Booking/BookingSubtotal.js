import React from 'react';
import Title from '../typography/Title';
import Text from '../typography/Text';
import Button from '../button/Button';

import './booking.scss'
import { Link } from 'react-router-dom';

const BookingSubtotal = () => {
  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        <div className='order__data'>
          <Text>Пункт выдачи</Text>
          <div className="dots"></div>
          <Text className="text-small">
            <p>Ульяновск,</p>
            Нариманова 42</Text>
        </div>
        <div className='order__data'>
          <Text>Модель</Text>
          <div className="dots"></div>
          <Text className="text-small">
            <p>Hyndai,</p>
            i30 N</Text>
        </div>
        <div className='order__data'>
          <Text>Цвет</Text>
          <div className="dots"></div>
          <Text className="text-small">
            Голубой</Text>
        </div>
        <div className='order__data'>
          <Text>Длительность аренды</Text>
          <div className="dots"></div>
          <Text className="text-small">
            1д2ч</Text>
        </div>
        <div className='order__data'>
          <Text>Тариф</Text>
          <div className="dots"></div>
          <Text className="text-small">
            На сутки</Text>
        </div>
        <div className='order__data'>
          <Text>Полный бак</Text>
          <div className="dots"></div>
          <Text className="text-small">
            Да</Text>
        </div>
      </div>

      <div className='prise'>
        Цена: 16 000
      </div>
      <div className='btn__booking'>
        <Link to='/confirmation'>
          <Button className='btn'
          >Заказать</Button>
        </Link>
      </div>
    </div>
  )
}

export default BookingSubtotal
