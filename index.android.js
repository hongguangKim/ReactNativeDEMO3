/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

var MainScreen = require('./pages/MainScreen');
var DetailScreen = require('./pages/DetailScreen');
var NavigationBarRouteMapper = require('./pages/NavigationBarRouteMapper');

class DEMO3 extends Component {
 
  render() {
    return (
       <Navigator
          style = {styles.container}
          initialRoute={{id:"main",title:"首页"}}
          renderScene={this.renderNav}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={styles.navBar}
           />}
       />
    );
  }
  renderNav(route,nav){
        switch (route.id) {
          case 'main':
            return <MainScreen navigator={nav} title="首页"/ >;
          case 'detail':
            return <DetailScreen navigator={nav} title="Detail"/ >;
        }
    }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
   },
  navBar: {
    backgroundColor: 'black',
     flex:1,
  },
});

AppRegistry.registerComponent('DEMO3', () => DEMO3);
