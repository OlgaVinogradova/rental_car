import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Btn.scss';

const Button = ({ children, onClick, className }) => {
  const classes = classNames(
    'btn',
    className
  );
  return (
    <button className={classes} onClick={onClick}>{children}</button>
  );
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: 'default',
  onClick: () => { },
  className: '',
};
export default Button;