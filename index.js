import { AppRegistry } from 'react-native';
import StorybookUI from './storybook';
import App from './app/App';

AppRegistry.registerComponent('AdonisApp', () => App);
// AppRegistry.registerComponent('AdonisApp', () => (__DEV__ ? StorybookUI : App));
