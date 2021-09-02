import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Btn.scss';

const Button = ({ children, onClick, className, style, onMouseLeave, onMouseEnter }) => {
  const classes = classNames(
    'btn',
    className
  );
  return (
    <button
      className={classes}
      onClick={onClick}
      style={style}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({
    background: PropTypes.string,
  })
};

Button.defaultProps = {
  children: 'default',
  onClick: () => { },
  onMouseLeave: () => { },
  onMouseEnter: () => { },
  className: '',
};
export default Button;