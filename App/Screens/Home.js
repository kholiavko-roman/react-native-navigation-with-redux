import React, { Component } from 'react';
import {
  Text,
  View,
 TouchableOpacity,
 StyleSheet,
 Alert
} from 'react-native';

class Home extends Component {

 static navigatorButtons = {
   leftButtons: [
     {
       //icon: require('../../img/navicon_menu.png'),
       title: 'Menu',
       id: 'menu'
     }
   ],
   rightButtons: [
     {
       title: 'Edit',
       id: 'edit'
     },
     {
       //icon: require('../../img/navicon_add.png'),
       title: 'add',
       id: 'add'
     }
   ]
 };

 constructor(props){
   super(props);

   // if you want to listen on navigator events, set this up
   this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
 }

 onNavigatorEvent(event) {
   // handle a deep link
   if (event.type == 'DeepLink') {
      const parts = event.link;
      if (parts == 'Screen1') {
        this.onPressScreen1();
      }
   }

   if (event.id === 'menu') {
     this.props.navigator.toggleDrawer({
       side: 'left',
       animated: true
     });
   }
   if (event.id === 'edit') {
     Alert.alert('NavBar', 'Edit button pressed');
   }
   if (event.id === 'add') {
     Alert.alert('NavBar', 'Add button pressed');
   }
 }


 onPressScreen1() {
   this.props.navigator.push({
     title: "Screen 1",
     screen: "app.Screen1"
   });
 }

 render(){
   return(
     <View style={{flex: 1, padding: 20}}>
       <Text>Home</Text>
       <TouchableOpacity onPress={this.onPressScreen1.bind(this)}>
         <Text style={styles.button}>Screen 1</Text>
       </TouchableOpacity>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 button: {
   textAlign: 'center',
   fontSize: 18,
   marginBottom: 10,
   marginTop: 10,
   color: 'blue'
 }
});

export default Home