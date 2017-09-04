import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import * as actions from './../reducers/counter/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Second extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    console.log('DEEP LINK');
    // handle a deep link
    if (event.type == 'DeepLink') {
      const parts = event.link.split('/'); // Link parts
      const payload = event.payload; // (optional) The payload

      if (parts == 'Screen1') {
        this.props.navigator.resetTo({
          screen: "first",
          title: "First",
          animationType: 'fade'
        });
      }

      if (parts == 'Screen2') {
        console.log('GO to SECOND');
        this.props.navigator.resetTo({
          screen: "second",
          title: "Second",
          animationType: 'fade'
        });
      }
    }
  }

  componentWillMount() {
    console.log('Second Screen');
    this.props.actions.increment();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SECOND SCREEN</Text>
        <Text>Counter: {this.props.counter.count}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.resetTo({
              screen: "first",
              title: "First",
              animationType: 'fade'
            });
          }}
        >
          <Text>MOVE TO FIRST screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


Second.navigatorStyle = {
  statusBarColor: 'black',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'black',
  navBarBackgroundColor: '#0a0a0a',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
};

Second.navigatorButtons = {
  leftButtons: [
    { id: "sideMenu" }
  ],
  rightButtons: [{ // buttons for the right side of the nav bar (optional)
    title: 'Test', // if you want a textual button
  }]
};

Second.propTypes = {
  counter: PropTypes.object.isRequired,
  navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Second);
// export default Second;