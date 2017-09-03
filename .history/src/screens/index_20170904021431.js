import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Navigation} from 'react-native-navigation';

import Splash from './Splash';
import First from './First';
import Second from './Second';
import Drawer from './Drawer';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('first', () => First, store, Provider);
  Navigation.registerComponent('second', () => Second, store, Provider);
  Navigation.registerComponent('drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('splash', () => Splash, store, Provider);
}

