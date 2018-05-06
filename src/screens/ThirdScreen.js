import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles';

export default class ThirdScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Third Screen</Text>
      </View>
    );
  }
}
