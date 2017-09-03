import React, { PropTypes, Component } from 'react';
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
          <View>
            <Text>SECOND SCREEN</Text>
            <Text>{this.props.counter.count}</Text>
          </View>
      )
  }
}

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