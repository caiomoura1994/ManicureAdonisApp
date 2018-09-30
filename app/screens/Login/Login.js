import React from 'react';
import { View, Alert } from 'react-native';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import strings from '../../config/strings';
import styles from './styles';
import { Content, Button, Input, AvatarCircle, Icon } from '../../components';

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
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  handlerError = () => {
    Alert.alert(
      'Login ou senha incorretos',
      'Os dados preenchidos estão incorretos. Tente novamente',
    );
  };
  goToHomePage(response) {
    console.log(response);
    const { navigation } = this.props;
    if (response) {
      if (response.login) {
        navigation.navigate('TabsContainer', { userData: response });
      } else {
        this.handlerError();
      }
    } else {
      this.handlerError();
    }
  }

  render() {
    const { email, password } = this.state;
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
                  textContentType="emailAddress"
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
                  textContentType="password"
                  onChangeText={(dataResponse) => {
                    this.setState({ password: dataResponse });
                  }}
                  secureTextEntry
                  returnKeyType="done"
                  placeholder="Senha"
                />
                <Button
                  kind="rounded"
                  animation="fadeInRight"
                  onPress={() => {
                    addTodo({
                      // variables: { email: 'caiomoura1994@gmail.com', password: 'C410140311' },
                      variables: { email, password },
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

Login.propTypes = {
  navigation: PropTypes.any,
};

export default Login;
