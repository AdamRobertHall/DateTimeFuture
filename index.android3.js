import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewItem1}>
        </View>
        <View style={styles.viewItem2}>
        </View>
        <View style={styles.viewItem3}>
        </View>
        <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row'}}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewItem1:{
    flex:1,
    flexDirection:'row',
    height:50,
    backgroundColor:'#FF33CC'
  },
  viewItem2:{
    flex:1,
    flexDirection:'row',
    height:50,
    marginTop:15,
    backgroundColor:'#00FFFF'
  },
  viewItem3:{
    flex:1,
    flexDirection:'row',
    height:50,
    backgroundColor:'#CCBBFF'
  },
});

AppRegistry.registerComponent('DateTimeFuture', () => ReactNativeProject);