import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';

import {Navigation} from 'react-native-navigation';

import * as actions from './../reducers/counter/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Drawer extends Component {
  constructor(props) {
		super(props);
  }

  navigate = (screenID) => {
      this.props.navigator.handleDeepLink({
          link: screenID,
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



Drawer.propTypes = {
	count: PropTypes.object.isRequired,
	navigator: PropTypes.object
};


function mapStateToProps(state, ownProps) {
	return {
		count: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);