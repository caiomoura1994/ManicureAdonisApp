import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oval: {
    flex: 1,
    position: 'absolute',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    width: '$SECTION_ROUNDED_BOTTOM_WIDTH',
    transform: [
      {
        scaleX: 2,
      },
    ],
    '@media ios': {
      overflow: 'hidden',
    },
  },
  innercontainer: {
    width: '$SECTION_ROUNDED_BOTTOM_WIDTH',
    position: 'absolute',
    overflow: 'hidden',
  },
});
