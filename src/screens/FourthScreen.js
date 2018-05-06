import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles';

export default class FourthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Fourth Screen</Text>
      </View>
    );
  }
}
