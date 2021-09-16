import React from 'react';
import { useState } from 'react';

const ModelCard = ({
  name,
  prise,
  imgPath,
}) => {
  const imgStyle = {
    backgroundImage: "url(" + imgPath + ")",
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div role="button"
      onClick={handleClick}>
      <div
        className={!click ? 'model__card' : 'model__card model_active'}>
        <div>
          <div className='model__name'>{name}</div>
          <div className='model__prise'>{prise}</div>
        </div>
        <div className='model__img' style={imgStyle}></div>
      </div>
    </div>
  )
}

export default ModelCard