import React from 'react';
import { Container, Content, Text, CardServiceProvider } from '../../components';
import { Header, Left, Icon, Right, Body, Button, Title } from 'native-base';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
          serviceId:id
          description
          pubDate
          price 
          professionalOwner {
            key:id
            professionalId:id
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
                <CardServiceProvider key={index} servicePropsParams={serviceItem} />
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
