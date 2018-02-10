import { StackNavigator } from 'react-navigation';
import { Onboarding, SignUp } from '../screens';

export default StackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
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
