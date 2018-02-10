import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from './config/theme';
import Navigator from './config/routes';

EStyleSheet.build(theme);

export default () => <Navigator />;
