import React from 'react';
import { View, FlatList, Image, Alert } from 'react-native';
import { Container, Content, Input, Text, AvatarCircle, Button } from '../../components';

import strings from '../../config/strings';
import styles from './styles';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class ServiceDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>Descrição {this.props.service.description}</Text>
        <Text>Preço {this.props.service.price}</Text>
        <Text>pubDate {this.props.service.pubDate}</Text>
      </View>
    );
  }
}

class ListProfessionalsOfCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const subCategory = this.props.navigation.state.params.subCategory;

    const serviceQuery = gql`
      {
        searchService(subCategory: ${subCategory.key}) {
          description
          pubDate
          price 
          professionalOwner {
            key:id
            id
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
      <Query query={serviceQuery}>
        {({ loading, error, data }) => {
          console.warn(data);
          console.warn(error);
          if (error) {
            return <Text>Error :(</Text>;
          }
          if (loading) return <Text>Loading...</Text>;
          return <ServiceDetail service={data.searchService[0]} />;
        }}
      </Query>
    );
  }
}

export default ListProfessionalsOfCategory;
