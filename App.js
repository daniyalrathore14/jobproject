import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import index from './src/index';
import homeScreen from './src/homeScreen';
import Headers from './shared/header';
const navigator = createStackNavigator({
  index: {
    screen: index,
    navigationOptions: {
      headerTitle: () => <Headers />

    }
  },
  homeScreen: {
    screen: homeScreen, navigationOptions: {
      header: null

    }
  },

},
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      title: '',
    }

  }
)

export default createAppContainer(navigator);                                     