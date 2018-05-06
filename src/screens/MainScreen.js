import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Essential React Native!</Text>
        <Text style={styles.instructions}>
          This is a boilerplate project for you to get started quickly.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    width: '55%',
    color: '#333333',
    marginBottom: 5
  }
});
