import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TextInput
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
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;

    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return <View>
      <Text>PAGE3</Text>
      <Text>{showText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setParams({title: text});
        }}
      />
    </View>
  }

}

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'black'
  },
});