import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';


export default class StateTest extends Component {
  state = {
    size: 80
  }

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
      <Text style={{fontSize: 22}} onPress={() => {
        this.setState({
          size: this.state.size + 10,
        })
      }}>变大</Text>


      <Text style={{fontSize: 22, marginTop: 30}} onPress={() => {
        this.setState({
            size: this.state.size - 10
          }
        )
      }}>变小</Text>
      <Image
        source={require('./te6.png')}
        style={{width: this.state.size, height: this.state.size}}></Image>

    </View>

  }

}