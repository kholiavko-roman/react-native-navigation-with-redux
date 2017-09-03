import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';







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