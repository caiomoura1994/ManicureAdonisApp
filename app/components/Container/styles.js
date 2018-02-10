import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'ios' ? '$CONTAINER_HEIGHT' : '$CONTAINER_HEIGHT' - 20,
  },
});
