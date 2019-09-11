import React from 'react';
import style from './collection.module.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector.js';

import CollectionItems from '../../components/collection-item/collection-item.component.jsx';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className={style.collection_page}>
      <h2 className={style.title}>{ title }</h2>
      <div className={style.items}>
        {
          items.map(item => <CollectionItems key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
};


const mapStateToProps = (state, ownProps) => ({
  //need to pass in state because didn't use createStructuredSelector
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);