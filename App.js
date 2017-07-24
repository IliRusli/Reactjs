import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.red}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
  	flex: 1,
  	alignItems:'center',
  	justifyContent: 'center',

  },

  red: {
  	
    color: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('TestProject', () => HelloWorldApp);


