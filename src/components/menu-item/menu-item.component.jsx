import React from 'react';
import style from './menu-item.module.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  let attachStyle = style.menuItem;
  let selectStyle = style[size]
  if (size) {
    attachStyle = [style.menuItem, selectStyle].join(' ')
  }
  return (
  
    <div
      className={attachStyle}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      >  
      <div 
        className={style.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}       
      />
      <div className={style.content}>
        <h1 className={style.title.toUpperCase()}>{title}</h1>
        <span className={style.subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
};


export default withRouter(MenuItem);
