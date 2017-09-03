import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import {Navigation} from 'react-native-navigation';

import * as actions from './../reducers/counter/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class First extends Component {
    constructor(props) {
		super(props);
  }

  componentWillMount() {
    console.log('FIRST Screen');
    this.props.actions.increment();
    // console.log(this.props.navigator);
  }


  render() {
      return (
          <View>
            <Text>FIRST SCREEN</Text>
            <Text>{this.props.counter.count}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigator.resetTo({
                      screen: "second",
                      title: "Second",
                      animationType: 'fade'
                  });
              }}
            >
              <Text>MOVE TO SC screen</Text>
            </TouchableOpacity>
          </View>
      )
  }
}



First.navigatorStyle = {
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

First.navigatorButtons  = {
  leftButtons: [
      { id: "sideMenu" }
  ],
  rightButtons: [{ // buttons for the right side of the nav bar (optional)
      title: 'Edit', // if you want a textual button
  }]
};


First.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(First);
// export default First;