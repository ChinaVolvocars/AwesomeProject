import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator, DrawerItems, createSwitchNavigator
} from 'react-navigation';
import React from 'react';
import {Button, Platform, ScrollView, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../page/HomePage';
import Login from '../page/Login';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';


const AppStack = createSwitchNavigator(
  {
    Home: {
      screen: HomePage
    },
    Page1: {
      screen: Page1
    }
  }
);

const AuthStack = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
  }, {
    navigationOptions: {}
  }
);

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  }, {
    initialRouteName: 'Auth'
  }
)


export const AppDrawerNavigator = createDrawerNavigator({
  Page4: {
    screen: Page4,
    navigationOptions: {
      drawerLabel: 'Page4',
      drawerIcon: ({tintColor}) => {
        return <MaterialIcons
          name={'drafts'}
          size={24}
          style={{color: tintColor}}
        />
      },
    }
  },

  Page5: {
    screen: Page5,
    navigationOptions: {
      drawerLabel: 'Page5',
      drawerIcon: ({tintColor}) => {
        return <MaterialIcons
          name={'move-to-inbox'}
          size={24}
          style={{color: tintColor}}
        />
      }
    }
  }
}, {
  initialRouteName: 'Page4',
  contentOptions: {
    activeTintColor: '#E91E63'
  },
  contentComponent: (props) => {
    return <ScrollView style={{backgroundColor: '#789', flex: 1}}>
      <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
        <DrawerItems {...props}/>
      </SafeAreaView>
    </ScrollView>
  }
});

export const AppTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'All'
      }
    },

    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: 'iOS'
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: 'Android'
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        tabBarLabel: 'Dart'
      }
    }, Page5: {
      screen: Page5,
      navigationOptions: {
        tabBarLabel: 'Java'
      }
    }
  }, {
    tabBarOptions: {
      tabStyle: {mindWidth: 'wrap'},
      upperCaseLabel: false,
      scrollEnabled: true,
      style: {
        backgroundColor: '#678'
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
      },
    }
  }
);
export const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-home'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      }
    },

    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-people'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-chatboxes'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-add-circle'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      }
    }, Page5: {
      screen: Page5,
      navigationOptions: {
        tabBarLabel: '购物车',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={'ios-airplane'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      }
    }
  }, {
    tabBarPosition: {
      activeTintColor: Platform.OS === 'ios' ? '#E91E63' : '#FFF'
    }
  }
);

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

  Bottom: {
    screen: AppBottomTabNavigator,
    navigationOptions: {
      title: 'BottomTabNavigator',
    }
  },
  Top: {
    screen: AppTopTabNavigator,
    navigationOptions: {
      title: 'TopTabNavigator',
    }
  },

  DrawerNav: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      title: 'this is drawernavigator'
    }
  }
});