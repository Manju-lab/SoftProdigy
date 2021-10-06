import {FETCH_IMAGES} from './constant';

let getImagesData = (payload = {}) => {
  return {
    type: FETCH_IMAGES,
    payload,
  };
};

export {getImagesData};
