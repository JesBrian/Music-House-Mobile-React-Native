import React  from 'react';

import {
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { setTheme } from '../../redux/actions/ConfigActions.js'

import Ripple from 'react-native-material-ripple'
import { BoxShadow }  from 'react-native-shadow'

import SuperIcon from '../../components/SuperIcon.js'
import SuperButton from '../../components/SuperButton.js'

import { common, theme } from '../../assets/styles/common.js'


class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const shadowOpt = {
      width:Dimensions.get('window').width * 0.82, height:118, color:"#000", border:8, opacity:0.8, x:-6, y:1,
    };


    const menuData = [
      {icon:'\ue638', name:'我的消息', url:'Message'},
      {icon:'\ue671', name:'我的收藏', url:'Collection'},
      {icon:'\ueaec', name:'个性彩色', url:'AppTheme'}
    ];


    return (
      <View style={{height:'100%', paddingBottom:53, flex:1, backgroundColor:this.props.config.theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.73)'}}>
        <BoxShadow setting={shadowOpt}>
          <View style={{paddingTop:20, flex:1, flexDirection:'row', backgroundColor:this.props.config.theme === 'light' ? '#F8F8F8' : '#282828'}}>
            <View style={{width:88, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:48, height:48, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{marginTop:21, backgroundColor:'transparent', fontSize:15, color:'#FFF'}}>JesBrian</Text>
              <SuperButton onPress={() => {}} width={65} height={30} label={'已签到'} />
            </View>
          </View>
        </BoxShadow>

        <FlatList
          style={{marginVertical:8}}
          data={menuData}
          renderItem={({item}) => <Ripple onPress={() => {this.props.config.navigation.navigate(item.url)}} style={{width:'100%', height:38, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={item.icon} style={{margin:12, color:this.props.config.color, fontSize:20}} />
            <Text style={{color:'#BBB', fontSize:16}}>{ item.name }</Text>
          </Ripple>
          }
        />

        <View style={{width:'100%', height:43, paddingBottom:6, flexDirection:'row', backgroundColor:'#333'}}>
          <Ripple onPress={() => {this.props.dispatch(setTheme(this.props.config.theme === 'light' ? 'dark' : 'light'))}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            {
              this.props.config.theme === 'light' ? (
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue650'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                  <Text style={{fontSize:18, color:'#DDD'}}>夜间</Text>
                </View>
              ) : (
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue6c7'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                  <Text style={{fontSize:18, color:'#DDD'}}>日间</Text>
                </View>
              )
            }
          </Ripple>
          <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue672'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
            <Text style={{fontSize:18, color:'#DDD'}}>设置</Text>
          </Ripple>
          <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue622'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
            <Text style={{fontSize:18, color:'#DDD'}}>退出</Text>
          </Ripple>
        </View>
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(MenuPanel);
