/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import HelloComponent from './HelloComponent';

import LifecycleComponent from './LifecycleComponent';

import Animal from './Animal';
import Cat from './Cat';

import LayoutTest from './LayoutTest';


// import ExportComponent, {name, age, sum} from './ExportComponent'

import PropsTest from './PropsTest';

import StateTest from './StateTest';
import RefTest from './RefTest';


export default class setup extends Component<Props> {

  constructor(pro) {
    super(pro);
    this.state = {
      remove: false,
      size: 0,
    }

    this.animal = new Animal('动物', 111)
    this.cat = new Cat('小猫', 32);
  }


  render() {
    let whetherToLoadLifecycleComponent = this.state.remove ? null : <LifecycleComponent/>;
    let s = this.state.remove ? '加载组件' : '移除组件';
    let params = {name: '校长', age: 11, sex: '男'};

    let {name, sex} = params;
    return (
      // style={styles.container}
      <View>
        {/* <Text onPress={() => {
          this.setState({
              remove: !this.state.remove
            }
          )
        }}>{s}</Text>
        <HelloComponent/>
        {whetherToLoadLifecycleComponent}

        <Text style={{fontSize: 20}}>姓名：{name},年龄：{age},求和：1 + 2 = {sum(1, 2)}</Text>

        <PropsTest
          // name='XT'
          // sex='女'
          {...params}
        />
        <PropsTest/>


        <StateTest/>

        <RefTest
          ref="RefTest"/>

        <Text onPress={() => {
          let size = this.refs.RefTest.getSize();
          this.setState({
            size: size,
          })
        }}>获取大小{this.state.size}</Text>


        <Text>{this.animal.getDes()}</Text>
        <Text>{this.cat.getDes()}</Text>*/}


        <LayoutTest/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
