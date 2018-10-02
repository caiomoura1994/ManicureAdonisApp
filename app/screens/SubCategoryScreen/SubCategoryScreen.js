import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Icon,
  Input,
  Header,
  Button,
} from 'native-base';

import { Text } from '../../components';


class SubCategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }
  subCategoryItem(subCategory, index) {
    const { push } = this.props.navigation;
    const searchItem = subCategory.name.toLowerCase().indexOf(this.state.search.toLowerCase());
    return searchItem >= 0 || this.state.search === '' ? (
      <TouchableWithoutFeedback
        key={index.toString()}
        onPress={
        () => push('ListProfessionalsOfCategory', {
          subCategory,
          name: 'Categorias',
        })
      }
      >
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: subCategory.image }} />
            <Text style={{ paddingLeft: 5 }}>{subCategory.name}</Text>
          </Left>
          <Right>
            <Icon
              name="arrow-dropright"
              style={{ fontSize: 30 }}
            />
          </Right>
        </CardItem>
      </TouchableWithoutFeedback>
    ) : null;
  }
  render() {
    const { state, pop } = this.props.navigation;
    const { category } = state.params;
    const allSubCategoriesQuery = gql`
      {
        searchCategory(id:${category.key}) {
          subCategories {
              key:id
              name
              image
            }
        }
      }
    `;

    return (
      <View style={{ paddingBottom: 60 }}>
        <Header searchBar rounded>
          <Button onPress={() => pop()}>
            <Text style={{ color: 'white' }}>Voltar</Text>
          </Button>
          <Input placeholder="Pesquisar" onChangeText={search => this.setState({ search })} />
        </Header>
        <ScrollView>
          <View>
            <Card>
              <Query query={allSubCategoriesQuery}>
                {({ loading, error, data: { searchCategory: { subCategories } } }) => {
                  if (error) {
                    return <Text>Error :(</Text>;
                  }
                  if (loading) return <Text>Loading...</Text>;
                  const listCategories = subCategories.map((subCategory, index) =>
                    this.subCategoryItem(subCategory, index));
                  return listCategories;
                }}
              </Query>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}
SubCategoryScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SubCategoryScreen;
