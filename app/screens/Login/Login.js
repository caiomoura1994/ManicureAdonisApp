import React from 'react';
import { View, TextInput } from 'react-native';

import strings from '../../config/strings';
import styles from './styles';
import {
  Container,
  Content,
  SectionRoundedBottom,
  Logo,
  H1,
  H4,
  Button,
  Input,
  AvatarCircle,
  Icon,
} from '../../components';
import { colors } from '../../config/theme';

class Login extends React.Component {
  render() {
    return (
      <Container>
        {/* HEADER */}
        {/* <SectionRoundedBottom
          animated
          colorsGradient={colors.$GRADIENT_ANIMATED_COLOR}
          speed={2000}
          style={styles.header}
        >
          <Logo animation="fadeIn" />
        </SectionRoundedBottom> */}
        {/* CONTENT */}
        <Content style={styles.content}>
          {/* SECTION WELCOME */}
          <View style={styles.sectionWelcome}>
            <View style={{ alignItems: 'center' }}>
              <AvatarCircle>
                <Icon iconType="FontAwesome" name="user" size={60} />
              </AvatarCircle>
            </View>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </View>
          {/* SECTION BUTTONS */}
          <View style={styles.sectionButton}>
            <Button
              kind="rounded"
              animation="fadeInRight"
              onPress={() => this.props.navigation.navigate('TabsContainer')}
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
        </Content>
      </Container>
    );
  }
}

export default Login;
