import {createStackNavigator} from 'react-navigation';
import React from 'react';
import {Button} from 'react-native';
import HomePage from '../page/HomePage';
import Login from '../page/Login';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';


export const AppNavigators = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({navigation}) => {
      return {
        title: `${navigation.state.params.name}页面名`
      }
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: ({navigation}) => {
      return {
        title: 'page2'
      }
    }
  },

  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      const {navigation} = props;
      const {state, setParams} = navigation;
      const {params} = state;
      return {
        title: params.title ? params.title : 'page3',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => {
              setParams({mode: params.mode === 'edit' ? '' : 'edit'})
            }}
          />
        ),
      }
    }
  },


})