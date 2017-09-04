import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
 StyleSheet
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';


class Drawer extends Component {


 //navigate to Screen1 from Drawer
 _goToScreen1() {
   this._toggleDrawer();
   this.props.navigator.handleDeepLink({ link: "Screen1" });
 }//end _goToScreen1

 _toggleDrawer() {
   this.props.navigator.toggleDrawer({
     to: 'closed',
     side: 'left',
     animated: true
   });
 }//end _toggleDrawer


 render(){
  //  const iconSearch = (<Icon name="md-search" size={26} color="#000000" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
  //  const iconMovies = (<Icon name="md-film" size={26} color="#000000" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
  //  const iconTV = (<Icon name="ios-desktop" size={26} color="#000000" style={styles.drawerListIcon} />);

   return(
       <View style={styles.container}>
         <View style={styles.drawerList}>

           <TouchableOpacity onPress={this._goToScreen1.bind(this)}>
             <View style={styles.drawerListItem}>

               <Text style={styles.drawerListItemText}>
                 Screen1
               </Text>
             </View>
           </TouchableOpacity>
           <View style={styles.drawerListItem}>

             <Text style={styles.drawerListItemText} onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
               Coming Soon
             </Text>
           </View>
         </View>
       </View>

   );//end of return
 }//end of render


}//end of Drawer


Drawer.propTypes = {
 navigator: PropTypes.object
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingLeft: 25,
   justifyContent: 'center'
 },
 drawerList: {

 },
 drawerListIcon: {
   width: 27
 },
 drawerListItem: {
   flexDirection: 'row',
   alignItems: 'center',
   marginBottom: 23
 },
 drawerListItemText: {
   color: 'red',
   fontWeight: 'bold',
   fontSize: 23,
   paddingLeft: 15,
   flex: 1
 },
 linearGradient: {
   // top: 0,
   // left: 0,
   // right: 0,
   // height: 248,
   // position: 'absolute'
   flex: 1
 },
});

export default Drawer;