/*
Your drawer component goes here
*/

import React, { Component } from 'react';
import { StyleSheet, Platform, Dimensions, View, Text } from 'react-native';

export default class Drawer extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    ...Platform.select({
      ios: {
        width: '100%'
      },
      android: {
        width: Dimensions.get('window').width * 0.75
      }
    })
  }
});
