import { Navigation } from 'react-native-navigation';

import Drawer from './Drawer';
import Screen1 from './Screen1';
import Home from './Home'


export function registerScreens() {
	Navigation.registerComponent('app.Drawer', () => Drawer);
  Navigation.registerComponent('app.Home', () => Home);
  Navigation.registerComponent('app.Screen1', () => Screen1);
}