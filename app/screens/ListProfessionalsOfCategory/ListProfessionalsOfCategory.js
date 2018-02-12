import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle } from '../../components';

import strings from '../../config/strings';
import styles from './styles';

class ListProfessionalsOfCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const services = this.props.navigation.state.params.item.services;
    const title = this.props.navigation.state.params.item.name;

    return (
      <Container>
        <Text> {title}</Text>

        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
              data={services}
              renderItem={({ item }) => (
                <View>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: item.uri,
                    }}
                  />
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: item.professional.avatar,
                    }}
                  />
                  <Text>Nome: {item.professional.name}</Text>
                  <Text>Media: {item.professional.average_reputation}</Text>
                  <Text>Preço: {item.price}</Text>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default ListProfessionalsOfCategory;
