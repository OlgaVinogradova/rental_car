import React from 'react'
import PropTypes from 'prop-types';
import './RadioButton.scss';

const RadioButton = ({ children, onChange, value, checked }) => {

  return (
    <label className="custom-radio">
      <input className="radio" name="radio"
        value={value}
        type="radio"
        onChange={onChange}
        checked={checked} />
      <div></div>{children}
    </label>
  );
};
RadioButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  children: 'default',
  onChange: () => { },
};

export default RadioButton
