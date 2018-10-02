import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { View, ScrollView } from 'react-native';
import {
  Text,
  Category,
} from '../../../components';


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
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(category) {
    const { navigation } = this.props;
    const name = 'Categorias';
    navigation.navigate('SubCategoryScreen', { category, name });
  }

  render() {
    return (
      <ScrollView>
        <View>
          {/* Categorias */}
          <Query query={allCategoriesQuery}>
            {({ loading, error, data }) => {
              if (error) {
                return <Text>Algo deu errado :(</Text>;
              }
              if (loading) return <Text>Carregando...</Text>;
              const listCategories = data.allCategories.map((category, index) => (
                <Category key={index.toString()} category={category} onPress={this.onPress} />
              ));
              return listCategories;
            }}
          </Query>
        </View>
      </ScrollView>
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
