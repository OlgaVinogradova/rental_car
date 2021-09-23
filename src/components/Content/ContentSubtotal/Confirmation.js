import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';


const Confirmation = () => {
  return (
    <div className='confirmation'>
      <div className='confirmation__content'>
        <div className='text'>Подтвердить заказ</div>
        <div className='btn__grup'>
          <Link to='/orderBlank'>
            <Button className='btn btn__confirmation__next'
            >Подтвердить</Button>
          </Link>
          <Link to='/subtotal'>
            <Button className='btn btn__confirmation__prev'
            >Вернуться</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Confirmation.propTypes = {
  className: PropTypes.string
};

Confirmation.defaultProps = {
  className: ''
};

export default Confirmation
