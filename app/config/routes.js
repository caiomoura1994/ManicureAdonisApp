import { StackNavigator } from 'react-navigation';
import { Onboarding } from '../screens';

export default StackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
  },
);
