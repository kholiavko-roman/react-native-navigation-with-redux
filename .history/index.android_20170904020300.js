
import { Navigation } from 'react-native-navigation';

import {Provider} from "react-redux";

import {registerScreens} from './src/screens';
import configureStore from './src/store/configureStore';

const store = configureStore();

// screen related book keeping
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: "splash",
    },
    drawer: {
        left: {
            screen: "drawer",
        },
        animationType: 'door',
        //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    },
    animationType: 'none'
});