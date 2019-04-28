import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';




export default class LifecycleComponent extends Component {

  constructor(props) {
    super(props);
    //构造方法先执行
    console.log('-------constructor-------')
    this.state = {
      count: 0,
    }
  }


  componentWillMount(): void {

    //在初始化渲染执行之前立刻调用
    console.log('-------componentWillMount-------')


  }

  componentDidMount(): void {
    //在初始化渲染执行之后立刻调用一次，仅客户端有效
    console.log('------componentDidMount--------')


  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    //更新时候
    console.log('------componentWillReceiveProps--------')

  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    //是否要更新 
    console.log('------shouldComponentUpdate--------')

    return true;
  }

  componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
    //更新之前
    console.log('-------componentWillUpdate-------')

  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    //更新之后
    console.log('------componentDidUpdate-------')

  }

  componentWillUnmount(): void {
    //退出的时候会执行这个方法，此界面销毁的 时候
    console.log('--------componentWillUnmount------')

  }


  render() {
    console.log('--------render------')

    return <View>
      <Text onPress={() => {
        this.setState({
          count: this.state.count + 1,
        })
      }}>生命周期</Text>
      <Text style={{
        marginTop: 120,
      }}>变化：{this.state.count}</Text>

    </View>

  }

}