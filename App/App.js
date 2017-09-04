import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './Screens/screens';
registerScreens();

const navigatorStyle= {
  navBarBackgroundColor: '#4dbce9',
  navBarTextColor: '#ffff00',
  navBarSubtitleTextColor: '#ff0000',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
  statusBarTextColorScheme: 'light',
  tabBarBackgroundColor: '#4dbce9',
  tabBarButtonColor: '#ffffff',
  tabBarSelectedButtonColor: '#ffff00'
};

export default class App extends Component {

  constructor(props){
    super(props)

    //load some data
    this.startApp();
  }

  startApp(){
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'app.Home',
        title: 'Home',
        navigatorStyle
      },
      drawer: {
        left: {
          screen: 'app.Drawer'
        }
      }
    });

  }//end of startApp

}//end of App
