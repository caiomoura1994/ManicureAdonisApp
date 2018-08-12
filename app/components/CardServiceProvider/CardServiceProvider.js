import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

export default class CardServiceProvider extends React.Component {
  toHire() {
    console.log(this.props);
  }
  render() {
    const { servicePropsParams } = this.props;
    const {
      professionalOwner, price, description, serviceId,
    } = servicePropsParams;
    const ADD_MUTATION = gql`
      mutation addTodo($client: Int!, $userId: Int!, $serviceId: Int!) {
        createServiceRegiter(
          newServiceOrder: {
            addressAttendance: "AdRESS"
            client: $client
            payment: "1" # PAYMENT_CHOICES = ('1','Cartão'), ('2','Dinheiro'), ('3','PayPal'), ('4','PagSeguro')
            payed: false
            status: "1" #('1','Aguardando confirmação'),('2','Em andamento'),('3','Finalizado')
            service: $serviceId
            userId: $userId
          }
        ) {
          count
          newServiceOrder {
            date
            addressAttendance
            payment
            payed
            status
          }
        }
      }
    `;

    return (
      //   <Container>
      //     <Content>
      <Mutation
        mutation={ADD_MUTATION}
        update={(cache, { data }) => {
          console.log('data:', data);
          if (data.createServiceRegiter) {
            const { count, newServiceOrder } = data.createServiceRegiter;
          }
        }}
      >
        {addTodo => (
          <Card style={{ flex: 0 }}>
            <CardItem>
              {/* this.props.showMe ? <button type="submit" className="btn nav-btn-red">SIGN UP</button> : null */}
              <Left>
                {professionalOwner.avatar ? (
                  <Thumbnail
                    source={{
                      uri: professionalOwner.avatar,
                    }}
                  />
                ) : (
                  <Thumbnail
                    source={{
                      uri:
                        'https://lh3.googleusercontent.com/-DG3l5nRUvH4/AAAAAAAAAAI/AAAAAAAAAFs/sZxS069VKig/s180-c-k-no/photo.jpg',
                    }}
                  />
                )}

                <Body>
                  <Text>
                    {`${professionalOwner.name}`}
                    {`${professionalOwner.lastName}`}
                  </Text>
                  <Text note>{`Por apenas R$ ${price},00`}</Text>
                  {/* {professionalOwner.gender} */}
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} /> */}
                <Text>{description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  transparent
                  onPress={() => {
                    addTodo({
                      variables: {
                        userId: professionalOwner.professionalId,
                        client: 1,
                        serviceId,
                      },
                    });
                  }}
                  textStyle={{ color: '#87838B' }}
                >
                  <Icon name="cart" />
                  <Text>Contratar</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        )}
      </Mutation>
      //     </Content>
      //   </Container>
    );
  }
}
