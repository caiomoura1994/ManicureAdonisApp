import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle, Icon, Button } from '../../../components';

import strings from '../../../config/strings';
import servicesMock from '../../../config/mocks/servicesMock';
import professionalsMock from '../../../config/mocks/professionalsMock';

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <View style={{ flexDirection: 'row' }}>
          <AvatarCircle>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
          </AvatarCircle>
          <Text>Caio Barros, Rua Lavinia Magalhaes,619, Masculino</Text>
        </View>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Historico</Text>
            <FlatList
              data={servicesMock}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row' }}>
                  <AvatarCircle>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{
                        uri: professionalsMock[item.professionalId - 1].avatar,
                      }}
                    />
                  </AvatarCircle>

                  <Button
                    style={{ margin: '0%' }}
                    onPress={() =>
                      this.props.navigation.navigate('ProfessionalProfile', {
                        professionalId: item.professionalId,
                      })
                    }
                  >
                    {' Ver profissional '}
                  </Button>

                  <Button
                    onPress={() =>
                      this.props.navigation.navigate('ServiceDetail', {
                        serviceId: item.id,
                      })
                    }
                  >
                    {' Detalhes '}
                  </Button>
                  <Text>{item.status}</Text>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Profile;
