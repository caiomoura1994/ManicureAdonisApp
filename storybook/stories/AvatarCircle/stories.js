import React from 'react';
import { Image } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { AvatarCircle } from '../../app/components/AvatarCircle';

storiesOf('Avatar', module).add('<AvatarCircle/>', () => (
  <AvatarCircle>
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      }}
    />
  </AvatarCircle>
));
