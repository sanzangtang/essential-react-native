import { Navigation } from 'react-native-navigation';

// import screens
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import Drawer from './components/drawer';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

// set your app name
const APP_NAME = 'essentialRN';

const registerScreens = () => {
  Navigation.registerComponent(
    `${APP_NAME}.MainScreen`,
    () => MainScreen,
    store, // only add store and Provider when you need redux for a specific screen
    Provider
  );
  Navigation.registerComponent(
    `${APP_NAME}.SecondScreen`,
    () => SecondScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    `${APP_NAME}.ThirdScreen`,
    () => ThirdScreen,
    store,
    Provider
  );
  // an example of not connecting to store
  Navigation.registerComponent(`${APP_NAME}.FourthScreen`, () => FourthScreen);
  Navigation.registerComponent(`${APP_NAME}.Drawer`, () => Drawer);
};

export default registerScreens;
