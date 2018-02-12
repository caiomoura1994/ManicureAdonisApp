import { StackNavigator, TabNavigator } from 'react-navigation';
import { Onboarding, SignUp, Login, ListProfessionalsOfCategory } from '../screens';
import { Home, Chat, Calendar, Profile, Search } from '../screens/TabsContainer';

const tabNavigator = TabNavigator({
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
      title: 'PESQUISAR',
      // tabBarIcon: () => <Icon name="person-pin-circle" size={25} color="white" />,
    },
  },
});

const stackNavigator = StackNavigator(
  {
    test: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    ListProfessionalsOfCategory: {
      screen: ListProfessionalsOfCategory,
      navigationOptions: {
        header: () => null,
      },
    },
    Onboarding: {
      screen: Onboarding,
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
