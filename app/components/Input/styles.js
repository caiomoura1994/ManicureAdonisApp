import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../../config/theme';

export default EStyleSheet.create({
  input: {
    backgroundColor: '$INPUT_BACKGROUND',
    height: 45,
    justifyContent: 'center',
    elevation: 2,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  inputShadow: {
    shadowColor: '$BUTTON_SHADOW_COLOR',
    shadowOffset: {
      width: theme.$BUTTON_SHADOW_OFFSET_WIDTH,
      height: theme.$BUTTON_SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: '$BUTTON_SHADOW_RADIUS',
    shadowOpacity: '$BUTTON_SHADOW_OPACITY',
    elevation: 2,
  },
  inputRounded: {
    borderRadius: '$BUTTON_ROUNDED_RADIUS',
    height: '$BUTTON_ROUNDED_HEIGHT',
  },
});
