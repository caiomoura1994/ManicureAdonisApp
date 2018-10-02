import React from 'react';
import { Header, Left, Icon, Right, Body, Button, Title } from 'native-base';
import { ScrollView } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Container, Content, Text, CardServiceProvider } from '../../components';

class ListProfessionalsOfCategory extends React.Component {
  render() {
    const { state, pop } = this.props.navigation;
    const { subCategory } = state.params;
    const serviceQuery = gql`
      {
        searchService(subCategory: ${subCategory.key}) {
          page
          pages
          hasPrev
          hasNext
          objects {
            key: id
            serviceId: id
            description
            pubDate
            price
            professionalOwner {
              key: id
              professionalId: id
              online
              biography
              city
              state
              name
              lastName
              avatar
            }
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
              onPress={() => { pop(); }}
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

              const listServices = data.searchService.objects.map((serviceItem, index) => (
                <CardServiceProvider key={index.toString()} servicePropsParams={serviceItem} />
              ));
              return <ScrollView>{listServices}</ScrollView>;
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

export default ListProfessionalsOfCategory;
