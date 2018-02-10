import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: imageWidth / 2.3,
  },
  text: {
    color: '#FFF',
  },
  textDisabled: {
    display: 'none',
  },
});
