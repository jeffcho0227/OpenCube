import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component.jsx';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';


const ShopPage = ({ match }) => {
  console.log(match, 'match from shopPage');
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
};

export default ShopPage;