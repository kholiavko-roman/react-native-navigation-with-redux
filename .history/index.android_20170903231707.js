
import { Navigation } from 'react-native-navigation';

import {Provider} from "react-redux";

import {registerScreens} from './src/screens';
import configureStore from './src/store/configureStore';

const store = configureStore();

// screen related book keeping
registerScreens(store, Provider);


console.log(123);

Navigation.startSingleScreenApp({
    screen: {
        screen: "splash",
    },

});

console.log(321);