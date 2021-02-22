import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
import PrincipalFlow from './src/navigation/principalFlow';
import store from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <PrincipalFlow />
    </Provider>
  );
}

export default App;
 