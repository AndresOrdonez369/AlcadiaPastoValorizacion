import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
import PrincipalFlow from './src/navigation/principalFlow';
import store from './src/redux/store';

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

const App = () => {
  return (
    <Provider store={store}>
      <PrincipalFlow />
    </Provider>
  );
}

export default App;
 