import EStyleSheet from 'react-native-extended-stylesheet';
import { ChatConversation } from './ChatConversation';

export default EStyleSheet.create({
  // HEADER
  viewObjectChatList: {
    // flex: 1.5,
    flexDirection: 'row',
  },
  // CONTENT
  content: {
    flex: 2,
    marginHorizontal: 24,
  },
  // SECTION WELCOME
  sectionWelcome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWelcome: {
    textAlign: 'center',
  },
  subTitleWelcome: {
    textAlign: 'center',
  },
  // SECTION BUTTON
  sectionButton: {
    flex: 0.5,
    marginBottom: '1.5rem',
    justifyContent: 'flex-end',
  },
  buttonEntrar: {
    alignSelf: 'center',
    marginTop: -10,
  },
  buttonTextEntrar: {
    color: '#191919',
  },
});
