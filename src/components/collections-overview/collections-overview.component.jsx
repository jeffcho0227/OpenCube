import React from 'react';

import style from './collections-overview.module.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector.js';
import PreviewCollection from '../previewCollection/previewCollection.component.jsx';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className={style.collection_overview}>
      {
        collections.map(({id, ...otherCollections}) => {
          return <PreviewCollection key={id} {...otherCollections}/>
        })
      }
    </div>
  )
};


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);