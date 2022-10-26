import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

function App() {
  LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
