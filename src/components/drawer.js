/*
Your drawer component goes here
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Drawer extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%', // not based on the device screen
    backgroundColor: '#FAFAFA'
  }
});
