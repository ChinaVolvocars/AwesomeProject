import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';


export default class Page3 extends Component {

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
      <Text>PAGE3</Text>

    </View>
  }

}