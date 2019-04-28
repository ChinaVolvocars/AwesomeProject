import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


let name = '小明';
let age = '12';


export {name, age};


export default class ExportComponent extends Component {

  render() {
    return <Text>导出组件</Text>
  }

}


export function sum(a, b) {
  return a + b;
}