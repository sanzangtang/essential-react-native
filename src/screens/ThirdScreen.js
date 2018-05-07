import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/styles';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#E0F7FA' }]}>
    <Text style={styles.bigText}>Third Screen (A)</Text>
    <Text style={styles.text}>
      An example of using react-native-tab-view integrated with
      react-native-navigation.
    </Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFF8E1' }]}>
    <Text style={styles.bigText}>Third Screen (B)</Text>
    <Text style={styles.text}>
      An example of using react-native-tab-view integrated with
      react-native-navigation.
    </Text>
  </View>
);

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
};

export default class ThirdScreen extends Component {
  state = {
    navigationState: {
      index: 0,
      routes: [
        { key: 'first', icon: 'ios-cart-outline' },
        { key: 'second', icon: 'ios-cube-outline' }
      ]
    }
  };

  static navigatorStyle = {
    navBarHidden: true
  };

  _handleIndexChange = index => {
    const navigationState = { ...this.state.navigationState };
    navigationState.index = index;
    this.setState({
      navigationState
    });
  };

  _renderIcon = ({ route }) => (
    <Icon name={route.icon} size={30} color="white" />
  );

  _renderHeader = props => (
    <TabBar {...props} renderIcon={this._renderIcon} style={styles.tabBar} />
  );

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state.navigationState}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
