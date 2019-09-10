import React from 'react';

import style from './collection-item.module.scss';

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (
    <div className={style.collection_item}>
      <div 
        className={style.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
        <div className={style.collection_footer}>
          <span className={style.name}>
            {name}
          </span>
          <span className={style.price}>
            {price}
          </span>
        </div>
    </div>
  )
};

export default CollectionItem;