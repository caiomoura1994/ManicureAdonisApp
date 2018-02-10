import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { colors } from '../../config/theme';
import styles from './styles';

class Input extends React.Component {
  render() {
    return (
      <TextInput
        placeholderTextColor={colors.THIRD_COLOR}
        style={[styles.input, styles.inputRounded, styles.inputShadow]}
        underlineColorAndroid="transparent"
        {...this.props}
      />
    );
  }
}

Input.propTypes = {
  mask: PropTypes.string,
  onChangeInput: PropTypes.func,
};

export default Input;
