import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Container, Content, Input, Text, Button } from '../../../components';

import strings from '../../../config/strings';
import chatsMock from '../../../config/mocks/chatsMock';
import professionalsMock from '../../../config/mocks/professionalsMock';
import styles from './styles';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.warn(chatsMock);
    return (
      <Container>
        <Text> Meus Chats </Text>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
              data={chatsMock}
              renderItem={({ item }) => (
                <View style={styles.viewObjectChatList}>
                  <Text>{item.last_message}</Text>
                  <Button
                    color="#841584"
                    onPress={() =>
                      this.props.navigation.navigate('ChatConversation', { itemChat: item })
                    }
                  >
                    Ir para o Chat
                  </Button>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Chat;
