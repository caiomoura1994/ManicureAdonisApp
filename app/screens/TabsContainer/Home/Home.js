import React from 'react';
import { View, SectionList, FlatList, Image } from 'react-native';
import {
  AvatarCircle,
  Container,
  Content,
  Input,
  Text,
  Icon,
  Button,
  Category,
} from '../../../components';

import strings from '../../../config/strings';
import categoriesMock from '../../../config/mocks/categoriesMock';
import professionalsMock from '../../../config/mocks/professionalsMock';
import styles from './styles';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const categories = categoriesMock;
const bestProfessionals = professionalsMock;
const allCategoriesQuery = gql`
  query {
    allCategories {
      name
      icon
      key: id
    }
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {/* recomendado */}
            {/* <Text style={styles.textOnHigh}> Em alta no Adonis</Text>
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
                  </AvatarCircle>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate('ProfessionalProfile', {
                        professionalId: item.id,
                      })
                    }
                  >
                    {'Ver mais'}
                  </Button>
                  <Text style={styles.textOnHigh}> {item.name} </Text>
                  <Text style={styles.textPriceOnHigh}> Media{item.average_reputation} </Text>
                </View>
              )}
            /> */}

            {/* Categorias */}
            <Query query={allCategoriesQuery}>
              {({ loading, error, data }) => {
                if (error) {
                  return <Text>Error :(</Text>;
                }
                if (loading) return <Text>Loading...</Text>;
                const listCategories = data.allCategories.map((category, index) => (
                  // <Category key={index.toString()} name={categorie.name} icon={categorie.icon} />
                  <View>
                    <AvatarCircle>
                      <Icon iconType="FontAwesome" name={category.icon} size={60} />
                    </AvatarCircle>
                    <Button
                      onPress={() =>
                        this.props.navigation.navigate('SubCategoryScreen', {
                          // this.props.navigation.navigate('ListProfessionalsOfCategory', {
                          category,
                          name: 'Categorias',
                        })
                      }
                    >
                      {category.name}
                    </Button>
                  </View>
                ));
                return listCategories;
              }}
            </Query>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
