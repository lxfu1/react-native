/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import Detail from './src/container/message/index.js'
import HomePage from './src/container/App/index.js'

import Test from './src/container/test/index.js'

import {
    createStackNavigator,
} from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const App = createStackNavigator({
  Main: {screen: HomePage},
  Detail: {screen: Detail},
});

/*class App extends Component<Props> {
  render() {
    return (
      <HomePage />
    );
  }
}*/

export default App