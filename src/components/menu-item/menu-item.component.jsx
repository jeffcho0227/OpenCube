import React from 'react';
import style from './menu-item.module.scss';

const MenuItem = ({ title }) => (
  <div className={style.menuItem}> 
    <div className={style.conent}>
      <h1 className={style.title}>{title}</h1>
      <span className={style.subtitle}>SHOP NOW</span>
    </div>
  </div>
);


export default MenuItem;
