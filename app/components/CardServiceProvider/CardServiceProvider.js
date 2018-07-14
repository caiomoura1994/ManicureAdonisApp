import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

export default class CardServiceProvider extends React.Component {
  toHire() {
    console.log(this.props);
  }
  render() {
    const ADD_MUTATION = gql`mutation {
      createServiceRegiter(newService:{
      addressAttendance:"AdRESS",
        client:1,
        payment:"1", # PAYMENT_CHOICES = ('1','Cartão'), ('2','Dinheiro'), ('3','PayPal'), ('4','PagSeguro')
        payed:false,
        status:"1", #('1','Aguardando confirmação'),('2','Em andamento'),('3','Finalizado')
        service:${this.props.serviceId},
        userId:1
    }) {
        count
        newService {
          date
          addressAttendance
          payment
          payed
          status
          pk
        }
      }
    }
    `;
    return (
      //   <Container>
      //     <Content>
      <Mutation mutation={ADD_MUTATION}>
        {addTodo => (
          <Card style={{ flex: 0 }}>
            <CardItem>
              {/* this.props.showMe ? <button type="submit" className="btn nav-btn-red">SIGN UP</button> : null */}
              <Left>
                {this.props.servicePropsParams.professionalOwner.avatar ? (
                  <Thumbnail
                    source={{
                      uri: this.props.servicePropsParams.professionalOwner.avatar,
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
                    {this.props.servicePropsParams.professionalOwner.name}{' '}
                    {this.props.servicePropsParams.professionalOwner.lastName}{' '}
                  </Text>
                  <Text note>Por apenas R${this.props.servicePropsParams.price}</Text>
                  {/* {this.props.servicePropsParams.professionalOwner.gender} */}
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} /> */}
                <Text>{this.props.servicePropsParams.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  transparent
                  onPress={() => {
                    this.toHire();
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
