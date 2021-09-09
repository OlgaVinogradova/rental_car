import React from 'react'
import { Link } from "react-router-dom";
import TriangleRight from '../svg/triangleRight';
import './Breadcrumbs.scss'

const Tab = ({ to, title }) => {
  return (
    <div className='tab'>
      <Link to={to} className='tab__link'>
        <span className='tab__title'>{title}</span>
      </Link>
      <div className='triangle'>
        <TriangleRight />
      </div>
    </div>
  )
}

export default Tab
