import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class MessageNotice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>消息 - 通知</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
