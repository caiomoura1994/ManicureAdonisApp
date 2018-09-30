import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                Alert.alert('Facebook', `Login failed with error: ${error.message}`);
              } else if (result.isCancelled) {
                Alert.alert('Facebook', 'Login was cancelled');
              } else {
                Alert.alert('Facebook', `Login was successful with permissions: ${result.grantedPermissions}`);
              }
            }
          }
          onLogoutFinished={() => Alert.alert('Facebook', 'User logged out')}
        />
      </View>
    );
  }
}
