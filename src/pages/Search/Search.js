import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import SearchNavbar from '../../layout/top/type/SearchNavbar.js'
import SuperIcon from '../../components/SuperIcon.js'
import {connect} from "react-redux";


class Search extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <SearchNavbar navigation={this.props.navigation} />

        <View style={{paddingTop:8, flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <Ripple style={{height:38, flexDirection:'row', alignItems:'center'}}>
            <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue671'} style={{color:this.props.color, fontSize:23}} />
              <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌手分类</Text>
              <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
            </View>
          </Ripple>
          <Ripple style={{height:38, flexDirection:'row', alignItems:'center'}}>
            <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue62b'} style={{color:this.props.color, fontSize:23}} />
              <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌单分类</Text>
              <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
            </View>
          </Ripple>

          <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
              <Text style={{color:'#BBB'}}>热门搜索</Text>
            </View>
          </View>


          <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
              <Text style={{color:'#BBB'}}>历史搜索</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%', height:'100%',
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(Search);
