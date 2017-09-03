import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';

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
      // this.props.navigator.setDrawerEnabled({
      //     side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      //     enabled: false // should the drawer be enabled or disabled (locked closed)
      // });

      // this.props.navigator.toggleNavBar({
      //     to: 'hidden', // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
      //     animated: false // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
      // });
  }


  render() {
      return (
          <View>
            <Text>FIRST SCREEN</Text>
            <Text>{this.props.count}</Text>
          </View>
      )
  }
}



First.propTypes = {
	count: PropTypes.object.isRequired,
	navigator: PropTypes.object
};


function mapStateToProps(state, ownProps) {
	return {
		count: state.counter.count
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(First);