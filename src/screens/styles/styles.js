/*
This file defines styles for demo screens in this project
You don't have to include this in your own project
or you can put styling sheets anywhere you like
*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  bigText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center',
    width: '65%',
    color: '#333333',
    marginBottom: 5
  }
});

export default styles;
