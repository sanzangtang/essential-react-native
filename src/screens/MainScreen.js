import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Welcome to Essential React Native!</Text>
        <Text style={styles.text}>
          This is a boilerplate project for you to get started quickly.
        </Text>
      </View>
    );
  }
}
