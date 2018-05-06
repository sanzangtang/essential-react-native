import { Navigation } from 'react-native-navigation';

// import screens
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

// set your app name
const APP_NAME = 'essentialRN';

const registerScreens = () => {
  Navigation.registerComponent(`${APP_NAME}.MainScreen`, () => MainScreen);
  Navigation.registerComponent(`${APP_NAME}.SecondScreen`, () => SecondScreen);
  Navigation.registerComponent(`${APP_NAME}.ThirdScreen`, () => ThirdScreen);
  Navigation.registerComponent(`${APP_NAME}.FourthScreen`, () => FourthScreen);
};

export default registerScreens;
