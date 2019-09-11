import React from 'react';
import { connect } from 'react-redux';

import style from './collection-item.module.scss';
import Button from '../UI/Button/Button.component.jsx';
import { addItem } from '../../redux/cart/cart.actions.js';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item; 
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
        <Button onClick={() => addItem(item)} >Add to cart</Button>
    </div>
  )
};


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);