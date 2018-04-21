import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle, Button, Icon } from '../../components';
// import strings from '../../../config/strings';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class SubCategoryScreen extends React.Component {
  render() {
    // const professionalParam = this.props.navigation.state.params.professionalId;
    const category = this.props.navigation.state.params.category;
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

    // console.warn(category);
    // console.warn(category.key);
    // console.warn(allSubCategoriesQuery);
    return (
      <Query query={allSubCategoriesQuery}>
        {({ loading, error, data }) => {
          // console.warn(data);
          // console.warn(error);
          if (error) {
            return <Text>Error :(</Text>;
          }
          if (loading) return <Text>Loading...</Text>;
          const listCategories = data.searchCategory.subCategories.map((subCategory, index) => (
            // <Category key={index.toString()} name={categorie.name} icon={categorie.icon} />
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
                  this.props.navigation.push('ListProfessionalsOfCategory', {
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

export default SubCategoryScreen;
