import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

class Input extends React.Component {
  render() {
    const {
      value,
      disabled,
      status,
      width,
      height,
      style,
      inputStyle,
      iconObject,
      iconPosition,
    } = this.props;

    let leftIcon;
    let rightIcon;
    if (iconObject) {
      const icon = iconObject;
      leftIcon = iconPosition === 'left' && icon;
      rightIcon = iconPosition === 'right' && icon;
    }

    return (
      <View style={[styles.base, style, { width, height }, disabled ? styles.disabled : {}]}>
        {leftIcon}
        <TextInput
          editable={!disabled}
          style={[styles.base, styles.input, inputStyle, { width, height }]}
        />
        {rightIcon}
      </View>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['normal', 'valid', 'error', 'warn']),
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconObject: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Input.defaultProps = {
  value: '',
  disabled: false,
  status: 'normal',
};

export default Input;
