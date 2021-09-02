import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Menu.scss'
import Tab from './Tab';

const Menu = () => {

  let { url } = useRouteMatch();

  return (
    <div className='menu__wrap'>
      <div className='tabs__container'>
        {MenuData.map((tab, index) =>
          <div
            key={index} >
            <Tab
              to={`${url}/${tab.path}`}
              title={tab.title}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu