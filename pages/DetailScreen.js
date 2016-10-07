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
import TextInputWidget from '../views/TextInputWidget.js';
import TextTipsWidget from '../views/TextTipsWidget';
import TextImageWidget from '../views/TextImageWidget.js';
import Alert from '../views/Alert.js';
export default class DetailScreen extends Component{
  constructor(props){
      super(props);
      this.state={
          sex:'请选择'
      }
  }
   toMain(){
     this.props.navigator.pop();
   }
   render() {
    return (
      <View style={styles.container}>
        <TextImageWidget
          title='* 头像' />
        <TextInputWidget
          title='* 昵称'
          placeholder='请输使用您的真实姓名' />

        <TextTipsWidget
          title='* 性别' tips={this.state.sex} 
          onPress={()=>{this.showSex()}}
        />
        <TextTipsWidget
            title='* 生日' tips='请选择'/>

        <View style={{height:3}}/>

        <TextTipsWidget
            title='  学历' tips='请选择'/>

        <TextInputWidget
          title='  院校'
          placeholder='请填写毕业／就读院校' />

        <TextInputWidget
          title='  专业'
          placeholder='请填写您的专业' />

        <TextTipsWidget
            title='* 身份' tips='请选择您的身份'/>

        <TextTipsWidget
            title='* 教龄' tips='请选择您的教龄'/>
        <Alert ref="alter"/>
     </View>
    );
  }

  //todo  弹出选择 性别控件
  showSex(){
   this.refs.alter.show('请选择您的性别','男','女',this);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:53, //去除状态栏图标
    // backgroundColor: 'gray',
  },
});
module.exports = DetailScreen;
