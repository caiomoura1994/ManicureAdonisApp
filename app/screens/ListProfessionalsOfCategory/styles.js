import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  // HEADER
  header: {
    flex: 1.5,
  },
  // CONTENT
  content: {
    flex: 2,
    marginHorizontal: 24,
    paddingTop: 100,
  },
  // SECTION WELCOME
  sectionWelcome: {
    flex: 1,
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
  inputText: {
    // flex: 0.5,
    // marginBottom: '1.5rem',
    // justifyContent: 'flex-end',
  },
});
