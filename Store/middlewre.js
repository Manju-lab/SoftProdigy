import {all, put, takeLatest, call} from 'redux-saga/effects';
import {FETCH_IMAGES, SET_IMAGES} from './constant';
import CallApi from '../Utils/CallApi';

export function* getData(payload) {
  try {
    const response = yield call(
      CallApi,
      'get',
      'https://shibe.online/api/shibes?count=50&urls=true&httpsUrls=true',
      {},
    );

    let payload = response.data;
    yield put({
      type: SET_IMAGES,
      payload: payload,
    });
  } catch (error) {
    console.log('Error>>>>>>', error);
  }
}
export default function* root() {
  yield all([takeLatest(FETCH_IMAGES, getData)]);
}
