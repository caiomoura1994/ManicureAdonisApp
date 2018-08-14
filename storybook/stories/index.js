import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import CenterView from './CenterView';
import { Button } from '../../app/components/Button';
import { Alert, Image } from 'react-native';
import { AvatarCircle } from '../../app/components';

const myAlert = (title, content) => {
  Alert.alert(title, content);
};
storiesOf('Components', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <Button onPress={() => myAlert('Hello', 'Hello World')}>Hello Button</Button>
  ))
  .add('AvatarCircle', () => (
    <AvatarCircle>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        }}
      />
    </AvatarCircle>
  ));

storiesOf('Containers', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Button onPress={action('clicked-text')}>Hello Button</Button>);
