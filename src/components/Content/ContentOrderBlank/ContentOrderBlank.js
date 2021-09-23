import React from 'react';
import Text from '../../typography/Text';
import i30N from '../../../assets/image/i30N.png';

import '../content.scss';


const ContentOrderBlank = () => {
  return (
    <div className='content__wrap'>
      <div className='orderBlank__text'>Ваш заказ подтверждён</div>
      <div className='car'>

        <div className='order__param'>
          <div className='car__model'>Hyndai, i30 N
          </div>
          <div className='car__nomber'>
            <Text className='nomber__text'>K 761 HA 73</Text>
          </div>
          <Text className='car__option'><strong>Топливо</strong> 100%</Text>
          <Text className='car__option'><strong>Доступна с</strong> 12.06.2019 12:00</Text>
        </div>
        <div className='car__img'>
          <img src={i30N} />
        </div>
      </div>
    </div>
  )
}

export default ContentOrderBlank
