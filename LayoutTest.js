import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';


export default class StateTest extends Component {

  constructor(props) {
    super(props);
    //构造方法先执行
    console.log('-------constructor-------')
    // this.state = {
    //   count: 0,
    // }
  }


  render() {
    return <View
      style={{
        borderWidth: 2, cyan:'',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: "darkgray",
        marginTop: 20
      }}>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>1</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>2</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>3</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>4</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>5</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>6</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>7</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>8</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>9</Text>
      </View>
      <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
        <Text style={{fontSize: 16}}>10</Text>
      </View>
      
    </View>
  }

}