import React from 'react';
import { View } from 'react-native';
import { Container, Content, Input } from '../../../components';

import strings from '../../../config/strings';

class Calendar extends React.Component {
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

export default Calendar;
