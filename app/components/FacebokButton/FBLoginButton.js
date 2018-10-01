import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  facebookAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(result => {
      console.log(result);
      AccessToken.getCurrentAccessToken().then((data) => {
        const { accessToken } = data;
        this.initUser(accessToken);
      })
    })
  }
  initUser(token) {
    console.log(token);
    // https://developers.facebook.com/docs/graph-api/reference/v2.2/user
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((ERR) => {
        console.log(ERR);
      })
  }
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled by user.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  const { accessToken } = data;
                  this.initUser(accessToken);
                }
                )
              }
            }
          }
          onLogoutFinished={() => alert('Logged out')} />
      </View>
    );
  }
}
