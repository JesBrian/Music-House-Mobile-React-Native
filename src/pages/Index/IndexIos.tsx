import * as React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';


import { connect } from 'react-redux'
import { setNavigation } from '../../redux/actions/ConfigActions.js'

import ScrollableTabView from 'react-native-scrollable-tab-view'


import IndexNavbar from '../../layout/top/type/IndexNavbar.js'
import MenuPanel from '../../layout/left/MenuPanel.js'
import Drawer from 'react-native-drawer'
import SuperTabbar from '../../layout/tab/SuperTabbar.js'

import IndexSelf from './type/Self/IndexSelf.js'
import IndexRecommend from './type/Recommend/IndexRecommend.js'
import IndexFrined from './type/Friend/IndexFriend.js'


class Index extends React.Component<null, null> {
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
      <Drawer
        type="overlay"
        side="left" //抽屉方向 top／left／right／bottom

        open={false}//默认是否打开抽屉
        tapToClose={true}//点击内容处 会关闭抽屉
        openDrawerOffset={0.18} // 抽屉占整个屏幕的百分比
        closedDrawerOffset={-3}//关闭抽屉后 抽屉在屏幕中的显示比例
        panCloseMask={0.18}//最右边的频幕宽度比例范围内为关闭响应区域

        ref={(ref) => this._drawer = ref}

        content={<MenuPanel closeControlPanel={this.closeControlPanel} navigation={this.props.navigation}/>}

        styles={drawerStyles}

        tweenHandler={(ratio) => ({
          main: {opacity: (2 - ratio) / 2}
        })}
      >

        <View style={styles.container}>
          <IndexNavbar navigation={this.props.navigation} openControlPanel={this.openControlPanel} />
          <ScrollableTabView
            initialPage={1}
            renderTabBar={() => <SuperTabbar />}
            style={{paddingTop:6, backgroundColor:'rgba(0,0,0,0.73)'}}
          >

            <IndexSelf tabLabel="个人" />
            <IndexRecommend tabLabel="推荐" />
            <IndexFrined tabLabel="朋友" />
          </ScrollableTabView>
        </View>

      </Drawer>
    );
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  buttonClickEvent = () => {
    this.props.navigation.navigate('Login');
  };
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    flexDirection:'column'
  }
});

const drawerStyles = {
  drawer: {
    shadowColor:'#000', shadowOpacity:0.8, shadowRadius:3
  },
  main: {
    paddingLeft:3
  }
}


function reduxState(store) {
  return {
  }
}

export default connect(reduxState)(Index);