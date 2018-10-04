import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

const permissions = ['public_profile', 'email', 'user_friends', 'user_birthday', 'user_gender', 'user_location', 'user_photos'];
export default class FBLoginButton extends Component {
  initUser() {
    // https://developers.facebook.com/docs/graph-api/reference/v2.2/user
    const url = `https://graph.facebook.com/v2.2/me?fields=photos,email,birthday,first_name,gender,location,last_name,friends,address&access_token=${this.token}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        console.log("json:", json);
      })
      .catch((ERR) => {
        console.log(ERR);
      });
  }
  facebookAuth() {
    LoginManager.logInWithReadPermissions(permissions).then((result) => {
      console.log(result);
      AccessToken.getCurrentAccessToken().then((data) => {
        console.log(data);
        const { accessToken } = data;
        this.token = accessToken;
        this.initUser();
      });
    });
  }

  render() {
    return (
      <View>
        <LoginButton
          readPermissions={permissions}
          onLoginFinished={
            (error, result) => {
              if (error) {
                Alert.alert('Algo deu Errado!', `erro: ${result.error}`);
              } else if (result.isCancelled) {
                Alert.alert('Login foi cancelado pelo usuário');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  const { accessToken } = data;
                  this.token = accessToken;
                  this.initUser();
                });
              }
            }
          }
          onLogoutFinished={() => alert('Logged out')}
        />
      </View>
    );
  }
}
