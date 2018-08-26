import React from 'react';

import {
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';


import {connect} from 'react-redux'
import { setNavigation } from '../../redux/actions/ConfigActions.js'

import IndexNavbar from '../../layout/Top/type/IndexNavbar.js'
import MenuPanel from '../../layout/Left/MenuPanel.js'
import SuperButton from '../../components/SuperButton.js'
import Loading from '../../components/Loading.js'


class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    this.props.dispatch(setNavigation(this.props.navigation))
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={Dimensions.get('window').width * 0.82}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (<MenuPanel navigation={this.props.navigation} />)}>

        <View style={styles.container}>
          <IndexNavbar openControlPanel={this.onPenLeftDrawable} navigation={this.props.navigation} />

          <ScrollView style={{width: '100%', flex: 1}}>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Home')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
              <Button title='跳转到歌单详情' onPress={()=>this.props.navigation.navigate('PlayList')} />

              <Loading />

            </View>
          </ScrollView>
        </View>

      </DrawerLayoutAndroid>
    );
  }

  //打开侧滑栏
  onPenLeftDrawable = () => {
    this.drawer.openDrawer();
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});

function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(Index);
