import React  from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenModal } from '../../../../../redux/actions/ViewActions.js'

import MultiSelectNavbar from '../../../../top/TopNavbar/type/MultiSelectNavbar.js'

class MultiSelectSongModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{flex:1, backgroundColor:'#888'}}>
        <MultiSelectNavbar label={''} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
          <Text onPress={() => this.props.dispatch(hiddenModal())}>CheckboxSongModal</Text>
        </ScrollView>

        <View>
          <Text>bottom</Text>
        </View>
      </View>
    );
  }
}

function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(MultiSelectSongModal);