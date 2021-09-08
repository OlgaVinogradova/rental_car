import React from 'react';
import Title from '../../typography/Title';
import Text from '../../typography/Text';
import Button from '../../button/Button';

import '../booking.scss'

const BookingLocation = () => {
  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        <div className='order__data'>
          <Text>Пункт выдачи</Text>
          <div className="dots"></div>
          <Text className="text-small"><p>Ульяновск,</p>Нариманова 42</Text>
        </div>
      </div>
      <div className='prise'>
        Цена: от 8 000 до 12 000 ₽
      </div>
      <div className='btn__booking'>
        <Button className='btn'
        >Выбрать модель</Button>
      </div>
    </div>
  )
}

export default BookingLocation
