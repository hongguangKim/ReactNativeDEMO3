import React, { Component } from 'react';
var {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  PixelRatio,
  Dimensions,
  TouchableOpacity
} = require('react-native')


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var rightArrow = require('./rightArrow.png');
export default class TextTipsWidget extends Component{

    constructor(props) {
      super(props);
    }

  _renderRow() {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Text
            numberOfLines={1}
            style={styles.textInputTitle} >
            {this.props.title}
          </Text>
          
          <View style={styles.text}>
            <Text> {this.props.tips}</Text>
          </View>
          <TouchableOpacity onPress={this.props.onPress}  style={styles.rightArrow}>
            <Image source={rightArrow}  />
          </TouchableOpacity>
        </View>
      </View>
    );

  }

  render() {
    return this._renderRow();
  }
}

const styles = StyleSheet.create({
    rowContainer: {
      backgroundColor: '#FFF',
      width:screenWidth,
    },
    row: {
      flexDirection: 'row',
      height: 1/10*screenHeight,
      alignItems: 'center',
      marginRight: 15,
      marginLeft: 15,
      //paddingTop:15,
      borderBottomWidth: 0.5 / PixelRatio.get(),
      borderColor:'gray',//需要标色

    },
    textInputTitle: {
      width: 80,
      fontSize: 13,
      //color: '#333',
      //backgroundColor: 'red',
    },
    text: {
      flex: 1,
      height: 44,// @todo should be changed if underlined
      justifyContent:'flex-end',
      alignItems:'center',
      flexDirection: 'row',
      
    },
     image:{
      width:38,
      height:38,
      // backgroundColor:'gray',
      borderRadius: 19,
    },
    rightArrow:{
      paddingLeft:10,
      //backgroundColor:'red',

    }
  });
