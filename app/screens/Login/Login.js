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
            <H1 style={styles.titleWelcome} fontWeight="bold" animation="fadeInDown">
              {strings.welcome}
            </H1>
            <H4 style={styles.subTitleWelcome} italic animation="zoomIn">
              {strings.findServices}
            </H4>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </View>
          {/* SECTION BUTTONS */}
          <View style={styles.sectionButton}>
            <Button kind="rounded" animation="fadeInRight">
              {strings.startNow}
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
