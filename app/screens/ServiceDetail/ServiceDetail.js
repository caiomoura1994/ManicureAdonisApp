import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Input, Text } from '../../components';
import professionalsMock from '../../config/mocks/professionalsMock';
import servicesMock from '../../config/mocks/servicesMock';
// import strings from '../../../config/strings';

class ServiceDetail extends React.Component {
  render() {
    // const professionalParam = this.props.navigation.state.params.professionalId;
    const myServiceId = this.props.navigation.state.params.serviceId;
    const serviceParam = servicesMock[parseInt(myServiceId) - 1];
    const professionalParam = professionalsMock[parseInt(serviceParam.professionalId) - 1];
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{professionalParam.name}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: professionalParam.avatar,
          }}
        />
        <Text>{professionalParam.phone}</Text>
        <Text>{serviceParam.date}</Text>
        <Text>{serviceParam.value}</Text>
        <Text>{serviceParam.category}</Text>
      </View>
    );
  }
}

export default ServiceDetail;
