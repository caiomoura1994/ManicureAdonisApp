import { StackNavigator, TabNavigator } from 'react-navigation';
import { Onboarding, SignUp, Login } from '../screens';
import { Home, Chat, Calendar, Profile, Search } from '../screens/TabsContainer';

const tabNavigator = TabNavigator({
  Home: {
    screen: Home,
  },
  Chat: {
    screen: Chat,
  },
  Calendar: {
    screen: Calendar,
  },
  Profile: {
    screen: Profile,
  },
  Search: {
    screen: Search,
  },
});

const stackNavigator = StackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: () => null,
      },
    },
    TabsContainer: {
      screen: tabNavigator,
      navigationOptions: { headerMode: 'none' },
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
