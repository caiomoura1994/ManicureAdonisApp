import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  base: { alignSelf: 'stretch', borderWidth: 1 },
  normal: {
    backgroundColor: '$INPUT_BACKGROUND',
    borderColor: '$INPUT_NORMAL_COLOR',
    borderStyle: 'solid',
  },
  disabled: { opacity: 0.2 },
  valid: {
    borderColor: '$INPUT_VALID_COLOR',
    borderStyle: 'solid',
  },
  error: {
    borderColor: '$INPUT_ERROR_COLOR',
    borderStyle: 'solid',
  },
  warn: {
    borderColor: '$INPUT_WARN_COLOR',
    borderStyle: 'solid',
  },
  input: {
    borderColor: 'transparent',
    paddingLeft: 12,
    paddingRight: 6,
  },
  icon: {
    top: 12,
    right: 12,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  // iconStates: {
  //   valid: '$INPUT_VALID_ICON',
  //   warn: '$INPUT_WARN_ICON',
  //   error: theme.INPUT_ERROR_ICON,
  // },
  // colorStates: {
  //   normal: theme.INPUT_NORMAL_COLOR,
  //   valid: theme.INPUT_VALID_COLOR,
  //   warn: theme.INPUT_WARN_COLOR,
  //   error: theme.INPUT_ERROR_COLOR,
  // },
});
