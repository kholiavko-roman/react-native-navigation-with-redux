import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import {Navigation} from 'react-native-navigation';

import * as actions from './../reducers/counter/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Splash extends Component {
  constructor(props) {
		super(props);
  }

  componentWillMount() {
    console.log('Splash Screen');
    this.props.actions.increment();

    this.props.navigator.setDrawerEnabled({
        side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
        enabled: false // should the drawer be enabled or disabled (locked closed)
    });

    this.props.navigator.toggleNavBar({
        to: 'hidden', // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
        animated: false // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
    });
  }

  componentDidMount() {
      let _this = this;

      setTimeout(() => {
          _this.props.navigator.setDrawerEnabled({
              side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
              enabled: true // should the drawer be enabled or disabled (locked closed)
          });

          _this.props.navigator.resetTo({
              screen: "first",
              title: "First",
              animationType: 'fade'
          });
      }, 120);
  }

  render() {
      console.log(this);

      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>AAAAAAAAAAAAAAAAA</Text>
            <Text>{this.props.counter.count}</Text>
          </View>
      )
  }
}


Splash.propTypes = {
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

// export default Splash;
export default connect(mapStateToProps, mapDispatchToProps)(Splash);