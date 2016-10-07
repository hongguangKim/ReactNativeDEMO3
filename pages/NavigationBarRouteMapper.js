/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

 var NavigationBarRouteMapper = {
   //左边Button
   LeftButton: function(route, navigator, index, navState) {
     if (route.id === 'main') {
       return null;
     }
     var previousRoute = navState.routeStack[index-1];
     return (
       <View style={styles.navBarButton}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={styles.navBarButtonText}>
            {previousRoute.title}
          </Text>
        </TouchableOpacity>
       </View>
     );
   },
      //右边Button
   RightButton: function(route, navigator, index, navState) {
     if (route.id === 'detail') {
       return null;
     }
     return (
       <View style={styles.navBarButton}>
       <TouchableOpacity
         onPress={() => navigator.push({id:'detail',title:'Detail'})}>
         <Text style={styles.navBarButtonText} >
           Next
         </Text>
       </TouchableOpacity>
       </View>
     );
   },
   //标题
   Title: function(route, navigator, index, navState) {
     return (
       <View style={styles.navBarTitle}>
        <Text style={styles.navBarTitleText}>
          {route.title}
        </Text>
      </View>
     );
   },
 };

const styles = StyleSheet.create({
  navBarTitle: {
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center'
  },
  navBarTitleText: {
    color: 'white',
    textAlign:'center',
    marginRight:60,
    fontSize:24,
  },
  navBarButton: {
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  navBarButtonText: {
    color: '#5890FF',
    textAlign:'center'
  },
});
module.exports = NavigationBarRouteMapper;
