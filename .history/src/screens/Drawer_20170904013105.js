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
    this.props.navigator.toggleDrawer({
        side: "left",
        animated: "true",
        to: "closed",
    });

    if (screenID === "first") {
        this.props.navigator.resetTo({
            screen: "first",
            title: "First",
            animationType: 'fade'
        });
    } else if (screenID === "second") {
        this.props.navigator.resetTo({
            screen: "second",
            title: "Second",
            animationType: 'fade'
        });
    }
  };

  render() {
      return (
          <View style={{ flex: 1, backgroundColor: "white" }}>
              <Text onPress={() => this.navigate("first")}>First</Text>
              <Text onPress={() => this.navigate("second")}>Second</Text>
          </View>
      );
  }
}


Drawer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);