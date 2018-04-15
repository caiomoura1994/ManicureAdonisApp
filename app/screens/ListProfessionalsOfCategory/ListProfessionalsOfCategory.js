import React from 'react';
import { View, FlatList, Image, Alert } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle, Button } from '../../components';

import strings from '../../config/strings';
import styles from './styles';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class ListProfessionalsOfCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const services = this.props.navigation.state.params.item.services;
    // console.warn(this.props.navigation.state.params.category);
    console.warn(this.props.navigation.state.params.subCategory);

    const subCategory = this.props.navigation.state.params.subCategory;

    const allSubCategoriesQuery = gql`
      {
        searchService(subCategory: ${subCategory.key}) {
          description
          pubDate
          price 
          professionalOwner {
            key:id
            online
            gender
            biography
            city
            state
            name
            lastName
            avatar
          }
        }
      }
    `;
    return (
      <Container>
        <Text> Estes profissionais de estão online Agora!</Text>
        {/* <Content>
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
                  <Text>Média: {item.professional.average_reputation}</Text>
                  <Text>Preço: {item.price}</Text>
                  <Button
                    title="Learn More"
                    color="#841584"
                    onPress={() =>
                      Alert.alert(
                        'Contrate já, ',
                        `Aguarde a resposta de ${item.professional.name} por apenas R$${
                          item.price
                        }`,
                        [
                          {
                            text: 'Cancelar',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'Contratar',
                            onPress: () =>
                              setTimeout(() => {
                                Alert.alert(
                                  'Estou lhe esperando!',
                                  `${item.professional.name} está a caminho!`,
                                  [
                                    {
                                      text: 'Cancelar',
                                      onPress: () => console.log('Cancel Pressed'),
                                      style: 'cancel',
                                    },
                                    {
                                      text: 'Ir para o perfil dele(a)',
                                      onPress: () =>
                                        this.props.navigation.navigate('ProfessionalProfile', {
                                          professionalId: item.professional.id,
                                        }),
                                    },
                                  ],
                                  { cancelable: false },
                                );
                              }, 5000),
                          },
                        ],
                        { cancelable: false },
                      )
                    }
                  >
                    Contratar agora!
                  </Button>
                </View>
              )}
            />
          </View>
        </Content> */}
      </Container>
    );
  }
}

export default ListProfessionalsOfCategory;
