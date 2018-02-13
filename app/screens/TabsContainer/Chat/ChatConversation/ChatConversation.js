import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import {
  //   Icon,
  Container,
  Content,
  Input,
  Text,
  Button,
  AvatarCircle,
} from '../../../../components';

import strings from '../../../../config/strings';
import { chatsMock } from '../../../../config/mocks/chatsMock';

const messages = [];
class ChatConversation extends React.Component {
  pushObject() {}
  render() {
    const item = this.props.navigation.state.params.itemChat;
    const messages = item.messages;
    console.warn(item);
    return (
      <Container>
        <Text> {item.professional_avatar} </Text>
        <View style={{ flex: 10, justifyContent: 'center' }}>
          <FlatList
            data={messages}
            renderItem={({ objMessage }) => <Text>{objMessage},asdas</Text>}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input style={{ width: 250 }} placeholder="Digite aqui..." />
          <Button style={{ width: 100 }} size={10}>
            Send
          </Button>
        </View>
      </Container>
    );
  }
}

export default ChatConversation;
