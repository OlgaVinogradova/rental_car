import React from 'react';
import { useState } from 'react';
import Text from '../../typography/Text';
import RadioButton from '../../RadioButton/RadioButton';
import { ModelData } from './ModelData';
import ModelCard from './ModelCard';

import '../content.scss'

const SelectModel = () => {


  const [selectedModel, setSelectedModel] = useState([]);
  const [selectedEconom, setSelectedEconom] = useState();
  const [selectedPrem, setSelectedPrem] = useState();

  const arrEconom = ModelData.filter((item) => item.category === 'econom');
  const arrPrem = ModelData.filter((item) => item.category === 'prem');

  const onChangeAll = (e) => setSelectedModel(e.target.value)
  const onChangeEconom = (e) => setSelectedEconom(e.target.value)
  const onChangePrem = (e) => setSelectedPrem(e.target.value)

  return (
    <div className='content__select'>
      <div className='horizontal__radioGrup'>
        <RadioButton onChange={onChangeAll}><Text> Все модели</Text></RadioButton>
        <RadioButton onChange={onChangeEconom}><Text>Эконом</Text></RadioButton>
        <RadioButton onChange={onChangePrem}><Text>Премиум</Text></RadioButton>
      </div >
      <div className='model__wrap'>
        <div className='model'
        >
          {ModelData.map((model, index) =>
            <div key={index}>
              <ModelCard
                imgPath={model.imgPath}
                prise={model.prise}
                name={model.name} />
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default SelectModel
