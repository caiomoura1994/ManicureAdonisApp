import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';

export default class CardServiceProvider extends React.Component {
  render() {
    return (
      //   <Container>
      //     <Content>
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
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="cart" />
              <Text>Contratar</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      //     </Content>
      //   </Container>
    );
  }
}
