import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './src/screens/Auth/Login'
import AuthLoadingScreen from './src/screens/Auth/AuthLoading'

import ScheduleTab from './src/screens/ScheduleTab'
import ScheduleDetailsScreen from './src/screens/ScheduleTab/components/ScheduleDetails'

import NewsTab from './src/screens/NewsTab'
import NewsScreenDetails from './src/screens/NewsTab/NewsDetails'

import ProfileTab from './src/screens/ProfileTab'
import InfoTab from './src/screens/InfoTab'


import { store }  from './src/store/configureStore'
import { headerDefaultStyle } from './src/helpers/navigationHelper'

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
});

const ScheduleStack = createStackNavigator({
    ScheduleTab: {
      screen: ScheduleTab,
    },
    ScheduleDetailsScreen: ScheduleDetailsScreen
  },
  headerDefaultStyle
);

const NewsStack = createStackNavigator(
  {
    NewsTab: {
      screen: NewsTab,
    },
    NewsScreenDetails: {
      screen: NewsScreenDetails,
      navigationOptions: {
        title: 'Подробиці'
      }
    }
  },
  headerDefaultStyle
);

const TabNavigator = createBottomTabNavigator(
  {
    ScheduleTab: {
      screen: ScheduleStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="user-circle" size={30} color="#000000" />)
      }
    },
    InfoTab: {
      screen: InfoTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="user-circle" size={30} color="#000000" />)
      }
    },
    ProfileTab: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="user-circle" size={30} color="#000000" />)
      }
    },
    NewsTab: {
      screen: NewsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="rocket" size={30} color="#000000" />)
      }
    }
  },
  {
    initialRouteName: 'ScheduleTab',
  });

const AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: TabNavigator,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}