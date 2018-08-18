/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry
} from 'react-native';


import { Provider } from 'react-redux'

import ConfigureStore from './src/redux/store/ConfigureStore.js'

import Root from './src/pages/root.ios.js'

const store = ConfigureStore();


export default class MusicHouseApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
