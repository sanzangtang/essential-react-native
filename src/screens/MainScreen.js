import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
  }

  _onNavigatorEvent = event => {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'drawer') {
        this.props.navigator.toggleDrawer();
      }
    }
  };

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
