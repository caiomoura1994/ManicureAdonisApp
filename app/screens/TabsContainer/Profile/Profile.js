import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle, Icon } from '../../../components';

import strings from '../../../config/strings';

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
            <FlatList
              data={[
                { key: 'a', status: 'Em andamento (71) 9 8888-8888', icon: 'home' },
                { key: 'b', status: 'Finalizado', icon: 'add' },
              ]}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row' }}>
                  <AvatarCircle>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{
                        uri:
                          'https://plus.google.com/u/0/_/focus/photos/public/AIbEiAIAAABECJvipMufibr86wEiC3ZjYXJkX3Bob3RvKig1ZTQyYTZiZTgxNjRhMmViYTFkOWNjZmMxNGE4ZDgzYjRhMDQ1MDMxMAGgPWot5fVOrzb--8-49VWD7jMKYQ?sz=64',
                      }}
                    />
                  </AvatarCircle>
                  <Text>{item.status}</Text>
                  <Text></Text>
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
