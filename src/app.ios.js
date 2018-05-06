import React from 'react';
import registerScreens from './screens';
import { Navigation } from 'react-native-navigation';

registerScreens();

// styling your navigator
// check out docs here:
// https://wix.github.io/react-native-navigation/#/styling-the-navigator
const navigatorStyle = {};
const APP_NAME = 'essentialRN';

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Main',
      screen: `${APP_NAME}.MainScreen`,
      title: 'Main Screen',
      navigatorStyle
    },
    {
      label: 'Second',
      screen: `${APP_NAME}.SecondScreen`,
      title: 'Second Screen',
      navigatorStyle
    },
    {
      label: 'Third',
      screen: `${APP_NAME}.ThirdScreen`,
      title: 'Third Screen',
      navigatorStyle
    },
    {
      label: 'Fourth',
      screen: `${APP_NAME}.FourthScreen`,
      title: 'Fourth Screen',
      navigatorStyle
    }
  ]
});
