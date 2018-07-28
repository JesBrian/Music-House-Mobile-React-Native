/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry
} from 'react-native';

import { createStackNavigator } from 'react-navigation'
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

import Index from './src/pages/Index/IndexIos.js'
import Login from './src/pages/Login/Login.js'
import Register from './src/pages/Register/Register.js'
import Singer from './src/pages/Singer/Singer.js'
import PlayList from './src/pages/PlayList/PlayList.js'


// 注册导航
const PageRouter = createStackNavigator({
  Index: { screen: Index },
  Login: { screen: Login },
  Register: { screen: Register },
  Singer: { screen: Singer },
  PlayList: { screen: PlayList },
}, {
  initialRouteName: 'Index', // 默认显示界面
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  transitionConfig: () => ({ // 页面切换效果 - forHorizontal[right -> left], forVertical[bottom -> up]
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});



export default class MusicHouseApp extends React.Component {
  render() {
    return <PageRouter/>;
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
