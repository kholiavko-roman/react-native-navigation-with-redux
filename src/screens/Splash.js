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
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

//   onNavigatorEvent(event) {
//     console.log('DEEP LINK');
//     // handle a deep link
//     if (event.type == 'DeepLink') {
//         const parts = event.link.split('/'); // Link parts
//         const payload = event.payload; // (optional) The payload

//         if (parts == 'first') {
//             // this.props.navigator.push({
//             //     screen: "first"
//             // });
//         }

//         if (parts == 'Screen2') {
//             console.log('GO to SECOND');
//             this.props.navigator.resetTo({
//                 screen: "second",
//                 title: "Second",
//                 animationType: 'fade'
//             });
//         }
//     }
//   }

  componentWillMount() {
    console.log('Splash Screen');
    this.props.actions.increment();

    this.props.navigator.setDrawerEnabled({
        side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
        enabled: false // should the drawer be enabled or disabled (locked closed)
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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#c2c2c2' }}>
            <Text>Counter:</Text>
            <Text>{this.props.counter.count}</Text>
          </View>
      )
  }
}


Splash.propTypes = {
	counter: PropTypes.object.isRequired,
	navigator: PropTypes.object
};

Splash.navigatorStyle = {
    navBarHidden: true,
}


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