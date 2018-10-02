import React from 'react';
import { View, Image } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { Text, AvatarCircle, Button } from '../../components';


class SubCategoryScreen extends React.Component {
  render() {
    const { state, push } = this.props.navigation;
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
      <Query query={allSubCategoriesQuery}>
        {({ loading, error, data }) => {
          if (error) {
            return <Text>Error :(</Text>;
          }
          if (loading) return <Text>Loading...</Text>;
          const listCategories = data.searchCategory.subCategories.map(subCategory => (
            <View>
              <AvatarCircle>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: subCategory.image,
                  }}
                />
              </AvatarCircle>
              <Button
                onPress={() =>
                  push('ListProfessionalsOfCategory', {
                    subCategory,
                    name: 'Categorias',
                  })
                }
              >
                {subCategory.name}
              </Button>
            </View>
          ));
          return listCategories;
        }}
      </Query>
    );
  }
}
SubCategoryScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SubCategoryScreen;
