import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, Button
} from 'react-native';


export default class Login extends Component {

  constructor(props) {
    super(props);
    //构造方法先执行
    console.log('-------constructor-------')
    // this.state = {
    //   count: 0,
    // }
  }


  render() {
    return <View>
      <Text>Button</Text>
      <Button title={'login'} onPress={() => {
        this.props.navigation.navigate('App')
      }}/>

    </View>
  }

}