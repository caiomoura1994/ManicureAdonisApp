import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Container, Content, Input, Text, Button } from '../../../components';

import strings from '../../../config/strings';
import styles from './styles';

class Chat extends React.Component {
  render() {
    return (
      <Container>
        <Text> Estes profissionais de estão online Agora!</Text>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => (
                <View style={styles.viewObjectChatList}>
                  <Text>Preço</Text>
                  <Button
                    title="Learn More"
                    color="#841584"
                    onPress={
                      () =>
                        Alert.alert(
                          'Contrate já, ',
                          'Aguarde a resposta de',
                          [
                            {
                              text: 'Cancelar',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {
                              text: 'Contratar',
                              onPress: () => setTimeout(() => {}, 5000),
                            },
                          ],
                          { cancelable: false },
                        )
                      //   this.props.navigation.navigate('ListProfessionalsOfCategory', {
                      //     item,
                      //     name: 'Categorias',
                      //   })
                    }
                  >
                    Contratar agora!
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
