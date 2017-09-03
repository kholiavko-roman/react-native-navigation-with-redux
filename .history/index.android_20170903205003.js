import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const First = () => <Text>First</Text>;
const Second = () => <Text>Second</Text>;

class Drawer extends Component {
    navigate = (screenID) => {
        this.props.navigator.handleDeepLink({
            link: screenID,
            animated: false,
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

Navigation.registerComponent('first', () => wrapWithNavigation(First));
Navigation.registerComponent('second', () => wrapWithNavigation(Second));
Navigation.registerComponent('drawer', () => wrapWithNavigation(Drawer));

Navigation.startSingleScreenApp({
    screen: {
        screen: "first",
        title: "First",
    },
    drawer: {
        left: {
            screen: "drawer",
        }
    },
});