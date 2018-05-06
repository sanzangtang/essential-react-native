import React from 'react';
import registerScreens from './screens';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import loadIcons from './utils/loadIcons';

registerScreens();

// styling your navigator
// check out docs here:
// https://wix.github.io/react-native-navigation/#/styling-the-navigator
const navigatorStyle = {};
const APP_NAME = 'essentialRN';

// map your icons
const icons = {
  'ios-albums': {
    size: 30
  },
  'ios-chatbubbles': {
    size: 30
  },
  'ios-calendar': {
    size: 30
  },
  'ios-apps': {
    size: 30
  },
  'ios-menu': {
    size: 30
  }
};

loadIcons(Icon, icons).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Main',
        screen: `${APP_NAME}.MainScreen`,
        icon: sources[0],
        title: 'Main Screen',
        navigatorStyle,
        navigatorButtons: {
          leftButtons: [
            {
              icon: sources[4],
              id: 'drawer'
            }
          ]
        }
      },
      {
        label: 'Second',
        screen: `${APP_NAME}.SecondScreen`,
        icon: sources[1],
        title: 'Second Screen',
        navigatorStyle
      },
      {
        label: 'Third',
        screen: `${APP_NAME}.ThirdScreen`,
        icon: sources[2],
        title: 'Third Screen',
        navigatorStyle
      },
      {
        label: 'Fourth',
        screen: `${APP_NAME}.FourthScreen`,
        icon: sources[3],
        title: 'Fourth Screen',
        navigatorStyle
      }
    ],
    drawer: {
      left: {
        screen: `${APP_NAME}.Drawer`
      }
    }
  });
});
