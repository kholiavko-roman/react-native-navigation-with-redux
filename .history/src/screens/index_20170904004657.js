import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Navigation} from 'react-native-navigation';

import Splash from './Splash';
import First from './First';
import Second from './Second';
import Drawer from './Drawer';


const wrapWithNavigation = (WrappedComponent) => {
  return class WrappedNavigation extends Component {
      static navigatorStyle = {

      };
      static navigatorButtons = {
          leftButtons: [
              { id: "sideMenu" }
          ],
          rightButtons: [{ // buttons for the right side of the nav bar (optional)
              title: 'Edit', // if you want a textual button
          }]
      };

      constructor(props) {
          super(props);

          this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
      }

      onNavigatorEvent = (event) => {
          console.log('onNavigatorEvent');

          if (event.type === "NavBarButtonPress") {
              if (event.id === "sideMenu") {
                  this.props.navigator.toggleDrawer({
                      side: "left",
                      animated: "true",
                  });
              }
          }

          // handle a deep link
          if (event.type === "DeepLink") {
              const parts = event.link.split("/");

              this.props.navigator.toggleDrawer({
                  side: "left",
                  animated: "true",
                  to: "closed",
              });

              if (parts[0] === "first") {
                  this.props.navigator.resetTo({
                      screen: "first",
                      title: "First",
                      animationType: 'fade'
                  });
              } else if (parts[0] === "second") {
                  this.props.navigator.resetTo({
                      screen: "second",
                      title: "Second",
                      animationType: 'fade'
                  });
              }
          }
      };

      render() {
          return <WrappedComponent {...this.props} />;
      }
  };
};


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('first', () => First, store, Provider);
  Navigation.registerComponent('second', () => Second, store, Provider);
  Navigation.registerComponent('drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('splash', () => Splash, store, Provider);
}

// register all screens of the app (including internal ones)
// export function registerScreens() {
// //   Navigation.registerComponent('first', () => wrapWithNavigation(First), store, Provider);
// //   Navigation.registerComponent('second', () => wrapWithNavigation(Second), store, Provider);
//   Navigation.registerComponent('drawer', () => wrapWithNavigation(Drawer),);
//   Navigation.registerComponent('splash', () => Splash);
//   console.log('register');
// }