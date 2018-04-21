import React from 'react';
import { View, FlatList, Image, Alert } from 'react-native';
import {
  Container,
  Content,
  Input,
  Text,
  AvatarCircle,
  CardServiceProvider,
} from '../../components';
import { Header, Left, Icon, Right, Body, Button, Title } from 'native-base';
import strings from '../../config/strings';
import styles from './styles';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class ServiceDetail extends React.Component {
  render() {
    return <CardServiceProvider servicePropsParams={this.props.subCategory} />;
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
          key:id
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
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.pop();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Custom Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Query query={serviceQuery}>
            {({
 loading, error, data, refetch, networkStatus,
}) => {
              if (networkStatus === 4) return 'Atualizando!';
              if (error) {
                return <Text>Error :(</Text>;
              }
              if (loading) return <Text>Loading...</Text>;

              const listServices = data.searchService.map((serviceItem, index) => (
                <CardServiceProvider servicePropsParams={serviceItem} />
              ));
              return listServices;
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

export default ListProfessionalsOfCategory;
