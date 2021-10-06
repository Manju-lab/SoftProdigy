import {SET_IMAGES} from './constant';
let initialState = {data: []};

let HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {...state, data: action.payload};
    default:
      return state;
  }
};
export default HomeReducer;
