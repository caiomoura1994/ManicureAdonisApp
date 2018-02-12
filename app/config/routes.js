import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Onboarding,
  SignUp,
  Login,
  ListProfessionalsOfCategory,
  ProfessionalOffline,
} from '../screens';
import { Home, Chat, Calendar, Profile, Search } from '../screens/TabsContainer';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '../components';

const tabNavigatorProfessionals = TabNavigator(
  {
    ProfessionalOnline: {
      screen: ListProfessionalsOfCategory,
      navigationOptions: {
        header: null,
        title: 'ProfessionalOnline',
      },
    },
    ProfessionalOffline: {
      screen: ProfessionalOffline,
      navigationOptions: {
        header: null,
        title: 'ProfessionalOffline',
      },
    },
  },
  {
    tabBarPosition: 'top',
    showIcon: true,
  },
);
const tabNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        title: 'HOME',
        // tabBarIcon: () => <Icon name="person-pin-circle" size={25} color="white" />,
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        header: null,
        title: 'CHAT',
        // tabBarIcon: () => <Icon name="person-pin-circle" size={25} color="white" />,
      },
    },
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        header: null,
        title: 'CALENDARIO',
        // tabBarIcon: () => <Icon name="person-pin-circle" size={25} color="white" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
        title: 'PERFIL',
        // tabBarIcon: () => <Icon name="person-pin-circle" size={25} color="white" />,
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
        showIcon: true,
        title: 'PESQUISAR',
        tabBarIcon: () => <Icon name="check" />,
        // tabBarIcon: () => <Icon name="home" />,
        // tabBarIcon: <Icon name="home" />,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);

const stackNavigator = StackNavigator(
  {
    // test: {
    //   screen: Home,
    //   navigationOptions: {
    //     header: () => null,
    //   },
    // },
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: () => null,
      },
    },
    ListProfessionalsOfCategory: {
      screen: tabNavigatorProfessionals,
      navigationOptions: {
        header: () => null,
      },
    },
    TabsContainer: {
      screen: tabNavigator,
      navigationOptions: {
        headerLeft: null,
        headerMode: 'none',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

export default stackNavigator;
