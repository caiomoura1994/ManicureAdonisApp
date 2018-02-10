import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  // TEXT
  text: {
    color: '$FONT_COLOR',
    fontSize: '$FONT_SIZE',
    fontWeight: '$FONT_WEIGHT',
    fontStyle: '$FONT_STYLE',
    paddingVertical: '$PADDING_VERTICAL',
    textAlign: '$TEXT_ALIGN',
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  // H1
  h1: {
    fontSize: '$FONT_SIZE_H1',
  },
  // H2
  h2: {
    fontSize: '$FONT_SIZE_H2',
  },
  // H3
  h3: {
    fontSize: '$FONT_SIZE_H3',
  },
  // H4
  h4: {
    fontSize: '$FONT_SIZE_H4',
  },
  // H5
  h5: {
    fontSize: '$FONT_SIZE_H5',
  },
  // H6
  h6: {
    fontSize: '$FONT_SIZE_H6',
  },
});
