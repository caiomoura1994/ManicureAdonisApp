import React from 'react';
import { View, SectionList, FlatList, Image } from 'react-native';
import { AvatarCircle, Container, Content, Input, Text, Icon, Button } from '../../../components';

import strings from '../../../config/strings';
import categoriesMock from '../../../config/mocks/categoriesMock';
import professionalsMock from '../../../config/mocks/professionalsMock';
import styles from './styles';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const categories = categoriesMock;
const bestProfessionals = professionalsMock;

class Home extends React.Component {
  render() {
    return (
      //     <Query query={allUsers}>
      //          {({ loading, error, data }) => {
      //         if (error) {
      //           return <Text>Error :(</Text>;
      //         }
      //         if (loading) return <Text>Loading...</Text>;
      //         return (
      //           <Text>
      //             {data.allUsers[0].id} - {data.allUsers[0].name} {data.allUsers[0].lastName}{' '}
      //             {data.allUsers[0].gender}
      //           </Text>
      //         );
      //       }}
      //     </Query>
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {/* recomendado */}
            <Text style={styles.textOnHigh}> Em alta no Adonis</Text>
            <SectionList
              style={styles.SectionListOnHigh}
              horizontal
              sections={[
                {
                  title: 'Recomendado',
                  data: bestProfessionals,
                },
              ]}
              renderItem={({ item }) => (
                <View style={styles.viewOnHigh}>
                  <AvatarCircle>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{
                        uri: item.avatar,
                      }}
                    />
                    <Button
                      onPress={() =>
                        this.props.navigation.navigate('ProfessionalProfile', {
                          professionalId: item.id,
                        })
                      }
                    >
                      {'Ver mais'}
                    </Button>
                  </AvatarCircle>
                  <Text style={styles.textOnHigh}> {item.name} </Text>
                  <Text style={styles.textPriceOnHigh}> Media{item.average_reputation} </Text>
                </View>
              )}
            />

            {/* Categorias */}
            <SectionList
              style={styles.SectionListContent}
              sections={[
                {
                  title: 'Categorias',
                  data: categories,
                },
              ]}
              renderItem={({ item }) => (
                <View>
                  <AvatarCircle>
                    <Icon
                      iconType="FontAwesome"
                      name={item.icon}
                      size={60}
                      onPress={() =>
                        this.props.navigation.navigate('ListProfessionalsOfCategory', {
                          item,
                          name: 'Categorias',
                        })
                      }
                    />
                  </AvatarCircle>
                  <Text style={styles.textCategory}> {item.name} </Text>
                  <Text style={styles.textPrice}> A partir de R${item.minimal_price} </Text>
                </View>
              )}
              renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
