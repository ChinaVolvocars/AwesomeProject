import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, Button
} from 'react-native';

export default class HomePage extends Component {

  static navigationOptions = {
    title: 'home',
    headerBackTitle: '返回',
  }

  render() {
    const {navigation} = this.props;


    return <View>
      <Text>欢迎来到HomePage</Text>

      <Button title={'page1 页面'} onPress={() =>
        navigation.navigate('Page1', {name: '动态的'})
      }/>


      <Button title={'PAGE2 页面'} onPress={() =>
        navigation.navigate('Page2')
      }/>
      <Button title={'PAGE3 页面'} onPress={function () {
        navigation.navigate('Page3', {name: 'LE XIAO DI'});
      }
      }/>

      <Button title={'Top'} onPress={() => {
        navigation.navigate('Top')
      }}/>

      <Button title={'Bottom'} onPress={() => {
        navigation.navigate('Bottom')
      }}/>
      
      <Button title={'抽屉'} onPress={() => {
        navigation.navigate('DrawerNav')
      }}/>


    </View>
  }

}
