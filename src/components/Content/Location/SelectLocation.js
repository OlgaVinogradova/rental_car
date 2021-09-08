import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { LocationData } from './LocationData';
import Text from '../../typography/Text';
import '../content.scss'


const SelectLocation = () => {

  const [selectedCity, setSelectedCity] = useState();
  const [selectedAdress, setSelectedAdress] = useState();

  const availableAdress = LocationData.cities.find((c) => c.name === selectedCity);

  return (
    <div>
      <div className='select'>
        <label><Text>Город</Text> </label>
        <div className='datalist'>
          <input className='datalist__input'
            autoСomplete="off"
            list="sities-list"
            onChange={(e) => setSelectedCity(e.target.value)}
            type='text'
            placeholder='Начните вводить город...'
          />

          <datalist id='sities-list'>
            {LocationData.cities.map((value, key) => {
              return (
                <option value={value.name} key={key}>
                  {value.name}
                </option>
              );
            })}
          </datalist>
        </div>
      </div>

      <div className='select'>
        <label><Text>Пункт выдачи</Text></label>
        <div className='datalist'>
          <input
            list='adress-list'
            onChange={(e) => setSelectedAdress(e.target.value)}
            type='text'
            placeholder='Начните вводить пункт...'
          />
          <datalist id='adress-list'>
            {availableAdress?.adress.map((e, key) => {
              return (
                <option value={e} key={key}>
                  {e}
                </option>
              );
            })}
          </datalist>
        </div>
      </div>
    </div>
  );
}
export default SelectLocation
