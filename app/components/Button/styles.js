import EStylesSheet from 'react-native-extended-stylesheet';

import { theme } from '../../config/theme';

export default EStylesSheet.create({
  container: {
    margin: 8,
  },
  baseButton: {
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  baseText: {
    alignSelf: 'center',
    color: '$BUTTON_FONT_COLOR',
    paddingHorizontal: 8,
    fontWeight: '600',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRounded: {
    borderRadius: '$BUTTON_ROUNDED_RADIUS',
    height: '$BUTTON_ROUNDED_HEIGHT',
  },
  textRounded: {
    fontSize: '$BUTTON_ROUNDED_FONT_SIZE',
    fontWeight: '600',
  },
  buttonSquared: {
    height: '$BUTTON_SQUARED_HEIGHT',
    borderRadius: '$BUTTON_SQUARED_RADIUS',
  },
  textSquared: { fontSize: '$BUTTON_SQUARED_FONT_SIZE' },
  buttonShadow: {
    shadowColor: '$BUTTON_SHADOW_COLOR',
    shadowOffset: {
      width: theme.$BUTTON_SHADOW_OFFSET_WIDTH,
      height: theme.$BUTTON_SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: '$BUTTON_SHADOW_RADIUS',
    shadowOpacity: '$BUTTON_SHADOW_OPACITY',
    elevation: 2,
  },
  buttonSuccess: {
    backgroundColor: '$BUTTON_STATE_SUCCESS',
  },
  buttonDanger: {
    backgroundColor: '$BUTTON_STATE_DANGER',
  },
  buttonPrimary: {
    backgroundColor: '$BUTTON_STATE_PRIMARY',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
  },
});
