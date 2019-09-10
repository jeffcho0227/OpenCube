import React from 'react';
import shopData from '../../assests/data/shopData.js'
import PreviewCollection from '../../components/previewCollection/previewCollection.component.jsx';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      collections: shopData
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollections}) => {
            return <PreviewCollection key={id} {...otherCollections}/>
          })
        }
      </div>
    )
  }
};

export default ShopPage;