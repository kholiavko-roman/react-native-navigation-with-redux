
import { Navigation } from 'react-native-navigation';

import {Provider} from "react-redux";

import {registerScreens} from './src/screens';
import configureStore from './src/store/configureStore';

const store = configureStore();

// screen related book keeping
registerScreens(store, Provider);
// registerScreens();


const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
    drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
    screen: {
        screen: "splash",
        navigatorStyle,
        leftButtons: [
            { id: "sideMenu" }
        ],
        rightButtons: [{
            title: 'Test',
        }]
    },
    drawer: {
        left: {
            screen: "drawer",
        }
    },
});