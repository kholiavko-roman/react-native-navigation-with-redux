import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

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

    this.props.navigator.handleDeepLink({
      link: screenID
    });

    // if (screenID === "first") {
    //     this.props.navigator.resetTo({
    //         screen: "first",
    //         title: "First",
    //         animationType: 'fade'
    //     });
    // } else if (screenID === "second") {
    //     this.props.navigator.resetTo({
    //         screen: "second",
    //         title: "Second",
    //         animationType: 'fade'
    //     });
    // }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", width: 280 }}>
        <TouchableOpacity onPress={() => this.navigate("Screen1")}>
          <Text style={{ fontSize: 40, margin: 20 }}>First</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigate("Screen2")}>
          <Text style={{ fontSize: 40, margin: 20 }}>Second</Text>
        </TouchableOpacity>
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