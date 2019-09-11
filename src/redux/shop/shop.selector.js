import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
  [selectShop], 
  shopData => shopData
);

export const selectCollectionForPreview = createSelector(
  [selectShop], 
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShop], 
    collections => collections[collectionUrlParam]
  )