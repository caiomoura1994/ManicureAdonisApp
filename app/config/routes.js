import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Onboarding,
  SignUp,
  Login,
  ListProfessionalsOfCategory,
  ProfessionalOffline,
  ProfessionalProfile,
  ServiceDetail,
  SubCategoryScreen,
} from '../screens';
import { Home, Chat, ChatConversation, Calendar, Profile, Search } from '../screens/TabsContainer';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '../components';
import { Icon } from 'native-base';

const tabNavigatorProfessionals = TabNavigator(
  {
    ProfessionalOnline: {
      screen: ListProfessionalsOfCategory,
      navigationOptions: {
        // gesturesEnabled: false,
        header: null,
        title: 'Profissionais Online',
      },
    },
    // ProfessionalOffline: {
    //   screen: ProfessionalOffline,
    //   navigationOptions: {
    // gesturesEnabled: false,
    //     header: null,
    //     title: 'ProfessionalOffline',
    //   },
    // },
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
        // gesturesEnabled: false,
        // header: null,

        title: 'HOME',
        tabBarIcon: () => <Icon name="home" size={25} color="black" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        // gesturesEnabled: false,
        // header: null,

        title: 'PERFIL',
        tabBarIcon: () => <Icon name="person" size={25} color="black" />,
      },
    },
    // Chat: {
    //   screen: Chat,
    //   navigationOptions: {
    // gesturesEnabled: false,
    //     header: null,
    //     title: 'CHAT',
    //     // tabBarIcon: () => <Icon name="home" size={25} color="black" />,
    //   },
    // },
    // Calendar: {
    //   screen: Calendar,
    //   navigationOptions: {
    // gesturesEnabled: false,
    //     header: null,
    //     title: 'CALENDARIO',
    //     // tabBarIcon: () => <Icon name="home" size={25} color="black" />,
    //   },
    // },
    // Search: {
    //   screen: Search,
    //   navigationOptions: {
    // gesturesEnabled: false,
    //     header: null,
    //     showIcon: true,
    //     title: 'PESQUISAR',
    //     // tabBarIcon: () => <Icon name="check" />,
    //     // tabBarIcon: () => <Icon name="home" />,
    //     // tabBarIcon: <Icon name="home" />,
    //   },
    // },
  },
  {
    tabBarPosition: 'bottom',
    showIcon: true,
  },
);

const stackNavigator = StackNavigator(
  {
    // test: {
    //   screen: Home,
    //   navigationOptions: {
    // gesturesEnabled: false,
    //     header: () => null,
    //   },
    // },
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    SubCategoryScreen: {
      screen: SubCategoryScreen,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    ProfessionalProfile: {
      screen: ProfessionalProfile,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    ServiceDetail: {
      screen: ServiceDetail,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    ChatConversation: {
      screen: ChatConversation,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    ListProfessionalsOfCategory: {
      screen: tabNavigatorProfessionals,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    TabsContainer: {
      screen: tabNavigator,
      navigationOptions: {
        gesturesEnabled: false,
        headerLeft: null,
        headerMode: 'none',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        // gesturesEnabled: false,
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

export default stackNavigator;
