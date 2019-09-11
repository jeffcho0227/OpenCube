import React from 'react';
import style from './previewCollection.module.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PreviewCollection = ({ title, items}) => {
  return (
    <div className={style.collection_preview}>
      <h1 className={style.title}>{title.toUpperCase()}</h1>
      <div className={style.preview}>
        {
          items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>  
  )
};

export default PreviewCollection;