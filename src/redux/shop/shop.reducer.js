import shopData from '../../assests/data/shopData.js';

const INITIAL_STATE = shopData;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
    return state;
  }
};

export default shopReducer;