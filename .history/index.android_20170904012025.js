import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import First from './src/screens/First';
import Second from './src/screens/Second';


class Splash extends Component {
    componentWillMount() {
        console.log('will mount');

        this.props.navigator.setDrawerEnabled({
            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
            enabled: false // should the drawer be enabled or disabled (locked closed)
        });

        this.props.navigator.toggleNavBar({
            to: 'hidden', // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
            animated: false // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
        });
    }

    componentDidMount() {
        let _this = this;

        setTimeout(() => {
            _this.props.navigator.setDrawerEnabled({
                side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                enabled: true // should the drawer be enabled or disabled (locked closed)
            });

            _this.props.navigator.resetTo({
                screen: "first",
                title: "First",
                animationType: 'fade'
            });
        }, 300);
    }

    render() {
        return (
            <Text> AAAA </Text>
        )
    }
}


class Drawer extends Component {
    navigate = (screenID) => {
        this.props.navigator.toggleDrawer({
            side: "left",
            animated: "true",
            to: "closed",
        });

        if (screenID === "first") {
            this.props.navigator.resetTo({
                screen: "first",
                title: "First",
                animationType: 'fade'
            });
        } else if (screenID === "second") {
            this.props.navigator.resetTo({
                screen: "second",
                title: "Second",
                animationType: 'fade'
            });
        }
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

        constructor(props) {
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

Navigation.registerComponent('first', () => First);
Navigation.registerComponent('second', () => Second);
Navigation.registerComponent('drawer', () => Drawer);
Navigation.registerComponent('splash', () => Splash);


Navigation.startSingleScreenApp({
    screen: {
        screen: "splash",
    },
    drawer: {
        left: {
            screen: "drawer",
        }
    },
});