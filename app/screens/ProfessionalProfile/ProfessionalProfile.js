import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Input, Text } from '../../components';
import professionalsMock from '../../config/mocks/professionalsMock';
// import strings from '../../../config/strings';

class ProfessionalProfile extends React.Component {
  render() {
    // const professionalParam = this.props.navigation.state.params.professionalId;

    const professionalParam =
      professionalsMock[parseInt(this.props.navigation.state.params.professionalId) - 1];

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{professionalParam.name}</Text>
        <Text>{professionalParam.avatar}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: professionalParam.avatar,
          }}
        />
        <Text>{professionalParam.phone}</Text>

        <Text>Higiene {professionalParam.hygiene}</Text>
        <Text>Cordialidade {professionalParam.cordiality}</Text>
        <Text>Pontualidade {professionalParam.punctuality}</Text>
      </View>
    );
  }
}

export default ProfessionalProfile;
