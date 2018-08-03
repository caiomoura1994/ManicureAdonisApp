import React from 'react';
import { View, Text, Alert } from 'react-native';

import strings from '../../config/strings';
import styles from './styles';
import { Content, Button, Input, AvatarCircle, Icon } from '../../components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGIN_MUTATION = gql`
  mutation addTodo($email: String!, $password: String!) {
    login(loginInput: { username: $email, password: $password }) {
      id
      biography
      profileType
      name
      lastName
    }
  }
`;

class Login extends React.Component {
  passwordInput: null;
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  goToHomePage(response) {
    console.log(response);
    if (response) {
      if (response.login) {
        this.props.navigation.navigate('TabsContainer', { userData: response });
      } else {
        Alert.alert(
          'Login ou senha incorretos',
          'Os dados preenchidos estão incorretos. Tente novamente',
        );
      }
    } else {
      Alert.alert(
        'Login ou senha incorretos',
        'Os dados preenchidos estão incorretos. Tente novamente',
      );
    }
  }
  focusPassword = () => {
    console.log(this.passwordInput);
    if (this.passwordInput) {
      this.passwordInput.focus;
    }
  };
  render() {
    return (
      <Content style={styles.content}>
        {/* SECTION WELCOME */}
        <Mutation
          mutation={LOGIN_MUTATION}
          update={(cache, { data }) => {
            this.goToHomePage(data);
          }}
        >
          {addTodo => (
            <View>
              <View style={{ alignItems: 'center' }}>
                <AvatarCircle>
                  <Icon iconType="FontAwesome" name="user" size={60} />
                </AvatarCircle>
              </View>
              <View>
                <Input
                  onChangeText={(dataResponse) => {
                    this.setState({ email: dataResponse });
                  }}
                  blurOnSubmit={false}
                  placeholder="E-mail"
                  returnKeyType="next"
                  keyboardType="email-address"
                  onSubmitEditing={() => {
                    this.focusPassword();
                  }}
                />
                <Input
                  onChangeText={(dataResponse) => {
                    this.setState({ password: dataResponse });
                  }}
                  secureTextEntry
                  ref={(input) => {
                    if (input != null) {
                      this.passwordInput = input;
                    }
                  }}
                  returnKeyType="done"
                  placeholder="Senha"
                />
                <Button
                  kind="rounded"
                  animation="fadeInRight"
                  onPress={() => {
                    addTodo({
                      // variables: { email: 'caiomoura1994@gmail.com', password: 'C410140311' },
                      variables: { email: this.state.email, password: this.state.password },
                    });
                  }}
                >
                  {strings.enterInApp}
                </Button>
                <Button
                  animation="fadeInLeft"
                  style={styles.buttonEntrar}
                  textStyle={styles.buttonTextEntrar}
                  type="naked"
                  shadow={false}
                >
                  {strings.forgotPassword}
                </Button>
              </View>
            </View>
          )}
        </Mutation>
      </Content>
    );
  }
}

export default Login;
