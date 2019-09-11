import catagoryData from '../../assests/data/directory.data';

const INITIAL_STATE = catagoryData;

console.log(INITIAL_STATE);

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};

export default directoryReducer;