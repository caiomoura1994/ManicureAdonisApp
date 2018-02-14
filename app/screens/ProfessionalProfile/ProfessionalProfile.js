import React from 'react';
import { View } from 'react-native';
import { Container, Content, Input, Text } from '../../components';

// import strings from '../../../config/strings';

class ProfessionalProfile extends React.Component {
  render() {
    const professionalParam = this.props.navigation.state.params.professionalId;
    console.warn(this.props.navigation);

    return (
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>{professionalParam.name}</Text>
            <Text>{professionalParam.avatar}</Text>
            <Text>{professionalParam.phone}</Text>

            <Text>Higiene {professionalParam.hygiene}</Text>
            <Text>cordialidade {professionalParam.cordiality}</Text>
            <Text>pontualidade {professionalParam.punctuality}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfessionalProfile;
