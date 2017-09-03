import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Navigation} from 'react-native-navigation';

import Splash from './Splash';

const First = () => <Text>{ this.props.count }</Text>;
const Second = () => <Text>Second</Text>;


class Drawer extends Component {
    navigate = (screenID) => {
        this.props.navigator.handleDeepLink({
            link: screenID,
        });
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Text onPress={() => this.navigate("first")}>First</Text>
                <Text onPress={() => this.navigate("second")}>Second</Text>
            </View>
        );
    }
}


const wrapWithNavigation = (WrappedComponent) => {
  return class WrappedNavigation extends Component {
      static navigatorStyle = {
          statusBarColor: "pink",
      };
      static navigatorButtons = {
          leftButtons: [
              { id: "sideMenu" }
          ],
          rightButtons: [{ // buttons for the right side of the nav bar (optional)
              title: 'Edit', // if you want a textual button
          }]
      };

      constructor(props: any) {
          super(props);

          this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
      }

      onNavigatorEvent = (event) => {
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
  Navigation.registerComponent('first', () => wrapWithNavigation(First));
  Navigation.registerComponent('second', () => wrapWithNavigation(Second));
  Navigation.registerComponent('drawer', () => wrapWithNavigation(Drawer));
  Navigation.registerComponent('rhino.splash', () => Splash);
}