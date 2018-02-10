import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { H1 } from '../Typography';

import styles from './styles';

class Logo extends React.Component {
  applyLetterSpacing = (string, count = 1) => string.split('').join('\u200A'.repeat(count));

  render() {
    const {
      logoName,
      animation,
      duration,
      delay,
      direction,
      easing,
      iterationCount,
      transition,
      onAnimationBegin,
      onAnimationEnd,
      useNativeDriver,
    } = this.props;

    const animatableProps = {
      animation,
      duration,
      delay,
      direction,
      easing,
      iterationCount,
      transition,
      onAnimationBegin,
      onAnimationEnd,
      useNativeDriver,
    };

    return (
      <Animatable.View style={styles.container} {...animatableProps}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('./images/helpHereLogoBranca.png')}
        />
        <View style={logoName ? styles.innerContainer : styles.textDisabled}>
          <H1 style={styles.text} fontWeight="bold">
            {this.applyLetterSpacing('Help', 3)}
          </H1>
          <H1>
            {this.applyLetterSpacing(' ', 3)}
          </H1>
          <H1 style={styles.text}>
            {this.applyLetterSpacing('Here', 3)}
          </H1>
        </View>
      </Animatable.View>
    );
  }
}

Logo.propTypes = {
  logoName: PropTypes.bool,
  animation: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['normal', 'reverse', 'alternate', 'alternate-reverse']),
  easing: PropTypes.oneOf([
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'ease-in-cubic',
    'ease-out-cubic',
    'ease-in-out-cubic',
    'ease-in-circ',
    'ease-out-circ',
    'ease-in-out-circ',
    'ease-in-expo',
    'ease-out-expo',
    'ease-in-out-expo',
    'ease-in-quad',
    'ease-out-quad',
    'ease-in-out-quad',
    'ease-in-quart',
    'ease-out-quart',
    'ease-in-out-quart',
    'ease-in-quint',
    'ease-out-quint',
    'ease-in-out-quint',
    'ease-in-sine',
    'ease-out-sine',
    'ease-in-out-sine',
    'ease-in-back',
    'ease-out-back',
    'ease-in-out-back',
  ]),
  iterationCount: PropTypes.number,
  transition: PropTypes.oneOf(['opacity', 'rotate', 'fontSize']),
  onAnimationBegin: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  useNativeDriver: PropTypes.bool,
};

Logo.defaultProps = {
  logoName: true,
};

export default Logo;
