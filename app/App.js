import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import MainNavigation from './navigation/index';
import store from './reducers/index';
import MyNetInfo from './components/myNetInfo';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
        <MyNetInfo></MyNetInfo>
      </NavigationContainer >
    </Provider>
  );
};


export default App;
