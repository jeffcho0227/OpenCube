import React from 'react';
import style from './menu-item.module.scss';

const MenuItem = ({ title, image, size }) => {
  let attachStyle = style.menuItem;
  let selectStyle = style[size]
  if (size) {
    attachStyle = [style.menuItem, selectStyle].join(' ')
  }
  return (
    <div
      className={attachStyle}>  
      <div 
        className={style.backgroundImage}
        style={{
          backgroundImage: `url(${image})`
        }}       
      />
      <div className={style.content}>
        <h1 className={style.title.toUpperCase()}>{title}</h1>
        <span className={style.subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
};


export default MenuItem;
