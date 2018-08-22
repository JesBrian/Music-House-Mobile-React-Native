import React  from 'react';

import {
  StatusBar,
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/IosPageRouter.js'

import MusicPlayer from '../layout/Bottom/MusicPlayer.js'
import NowPlayList from '../layout/Bottom/NowPlayList.js'


class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    // alert(this.props.config.navigatorObj)
  }

  render() {
    return (
      <View style={{flex:1, position:'relative'}}>
        <StatusBar barStyle="light-content" />
        <PageRouter/>
        {
          this.props.showView.bottomMusic === true ? <MusicPlayer/> : null
        }
        {
          this.props.showView.bottomPlayList === true ?  <NowPlayList/> : null
        }
      </View>
    );
  }
}

function reduxState(store) {
  return {
    config: store.config,
    showView: store.showView
  }
}

export default connect(reduxState)(Root);