import React, { useState } from 'react';
import Input from '../../input/Input';
import Text from '../../typography/Text';
import RadioButton from '../../RadioButton/RadioButton';

import '../content.scss';
import Checkbox from '../../Checkbox/Checkbox';

const SelecttOption = () => {

  const [clickStart, setClickStart] = useState(false);
  const [clickEnd, setClickEnd] = useState(false);
  const handleClickStart = () => setClickStart(!clickStart);
  const handleClickEnd = () => setClickEnd(!clickEnd);

  const newTypeStart = clickStart ? 'datetime-local' : 'text';
  const newTypeEnd = clickEnd ? 'datetime-local' : 'text';

  return (
    <div className='content__select'>
      <Text>Цвет</Text>
      <div className='category__select'>
        <div className='horizontal__radioGrup'>
          <RadioButton >Любой</RadioButton>
          <RadioButton>Красный</RadioButton>
          <RadioButton>Голубой</RadioButton>
        </div >
      </div>
      <Text>Дата аренды</Text>
      <div className='category__select'>
        <div className='select'>
          <label><Text>С</Text></label>
          <Input
            className='dateTime__input'
            onFocus={handleClickStart}
            type={newTypeStart}
            placeholder="Введите дату и время"
          />
          <div rol='button'
            className={clickStart ? 'close__active' : 'close'} />
        </div>
        <div className='select'>
          <label><Text>По</Text></label>
          <Input
            className='dateTime__input'
            onFocus={handleClickEnd}
            type={newTypeEnd}
            placeholder="Введите дату и время"
          />
          <div rol='button'
            className={clickEnd ? 'close__active' : 'close'} />
        </div>
      </div>
      <Text>Тариф</Text>
      <div className='category__select'>
        <div className='vertical__radioGrup'>
          <RadioButton>Поминутно, 7₽/мин</RadioButton>
          <RadioButton>На сутки, 1999 ₽/сутки</RadioButton>
        </div >
      </div>
      <Text>Доп услуги</Text>
      <div className='category__select'>
        <Checkbox>Полный бак, 500р</Checkbox>
        <Checkbox>Детское кресло, 200р</Checkbox>
        <Checkbox>Правый руль</Checkbox>
      </div>
    </div>
  )
}

export default SelecttOption
