/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
} from 'react-native';

var Swiper = require('react-native-swiper');
var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

export default class Slider extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
      <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
      <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
      <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    );
  }
};
const styles = StyleSheet.create({
  //slider
  	wrapper: {
    	height:120,
  	},
  	slide: {
    	height:120,
    	resizeMode: Image.resizeMode.contain,
  	},
});

module.exports = Slider;
