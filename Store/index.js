import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import HomeReducer from './reducer';
import middlewre from './middlewre';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(HomeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(middlewre);
export default Store;
