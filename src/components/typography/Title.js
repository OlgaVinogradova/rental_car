import React from 'react';
import PropTypes from 'prop-types';
import './typography.scss'


const Title = ({ children }) => {
  return (
    <div className='title'>{children}</div>
  )
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
};

export default Title
