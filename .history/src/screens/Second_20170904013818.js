import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import {Navigation} from 'react-native-navigation';

import * as actions from './../reducers/counter/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Second extends Component {
  constructor(props) {
		super(props);
  }

  componentWillMount() {
    console.log('Second Screen');
    this.props.actions.increment();
  }

  render() {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SECOND SCREEN</Text>
            <Text>{this.props.counter.count}</Text>
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

Second.navigatorButtons  = {
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