import React from 'react';
import { View } from 'react-native';
import { Container, Content, Input } from '../../components';

// mutation{
//   createAccount(newAccount:{
//     gender:"F",
//     profileType:"1",
//     biography:"Biografia",
//     state:"BA",
//     city:"Salvador",
//     name:"Caio",
//     lastName:"Moura",
//     phone:"71988362338",
//     email:"caiomoura1994@gmail.com",
//     password:"C410140311"
//   }) {
//     count
//     pk:count
//     newAccount
//   }
// }
class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Input placeholder="Nome" />
            <Input placeholder="Nome" />
          </View>
        </Content>
      </Container>
    );
  }
}
export default SignUp;
