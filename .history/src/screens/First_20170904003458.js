import React, { PropTypes, Component } from 'react';
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
  }


  render() {
      return (
          <View>
            <Text>FIRST SCREEN</Text>
            <Text>{this.props.count}</Text>
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