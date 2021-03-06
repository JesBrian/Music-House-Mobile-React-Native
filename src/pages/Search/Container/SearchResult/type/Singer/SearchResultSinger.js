import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'
import { withNavigation } from 'react-navigation'
import {connect} from "react-redux";


class SearchResultSinger extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>
        <LargeList style={{paddingBottom:8, flex:1}}
                   data={[{items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}]}
                   heightForIndexPath={() => 53}
                   renderIndexPath={this._renderIndexPath}
        />
      </ScrollView>
    );
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:53, flexDirection:'row'}}>
        <Ripple onPress={() => {this.props.navigation.navigate('SingerDetail')}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>搜索的歌手</Text>
            <Text style={{fontSize:13, color:'#AAA'}}>专辑: 180</Text>
          </View>
        </Ripple>
      </View>
    );
  }
}


export default withNavigation(SearchResultSinger);
