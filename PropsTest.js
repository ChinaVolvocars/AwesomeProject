import React, {Component, PropTypes} from 'react'


import {Text, View, StyleSheet} from 'react-native';


export default class PropsTest extends Component {
  //默认shuxing
  static defaultProps = {
    name: 'GT',
    age: 1
  }

  //属性检查
  // static propTypes = {
  //   name: PropTypes.string,
  //   age: PropTypes.number,
  //   sex: PropTypes.string.isRequired,
  // }


  render() {
    return <Text style={{fontSize: 23}}>你好！{this.props.name}</Text>;
  }

}