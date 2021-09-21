import React from 'react';
import Input from '../../input/Input';
import Text from '../../typography/Text';
import RadioButton from '../../RadioButton/RadioButton';

import '../content.scss';

const SelecttOption = () => {
  return (
    <div className='content__select'>
      <Text>Цвет</Text>
      <div className='horizontal__radioGrup'>
        <RadioButton ><Text> Любой</Text></RadioButton>
        <RadioButton><Text>Красный</Text></RadioButton>
        <RadioButton><Text>Голубой</Text></RadioButton>
      </div >
      <Text>Дата аренды</Text>
      <div className='select'>
        <label><Text>С</Text></label>
        <Input
          className='datalist__input'
          type='datetime-local'
          value='Введите дату и время'
          placeholder='Введите дату и время' />
      </div>
      <div className='select'>
        <label><Text>По</Text></label>
        <Input />
      </div>


    </div>
  )
}

export default SelecttOption
