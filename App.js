import React, {Component} from 'react';
import AppContainer from './Navigator/tabNavigator';
import {Provider} from 'react-redux';
import Store from './Store/index';

function App() {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
