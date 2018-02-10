import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { View, TouchableOpacity } from 'react-native';

import { Text } from '../Typography';

import styles from './styles';

class Button extends React.Component {
  render() {
    const stylesObject = {
      container: styles.container,
      baseButton: styles.baseButton,
      baseText: styles.baseText,
      innerContainer: styles.innerContainer,
      kind: {
        rounded: {
          button: styles.buttonRounded,
          text: styles.textRounded,
        },
        squared: {
          button: styles.buttonSquared,
          text: styles.textSquared,
        },
      },
      buttonShadow: styles.buttonShadow,
      states: {
        success: styles.buttonSuccess,
        danger: styles.buttonDanger,
        primary: styles.buttonPrimary,
        naked: styles.buttonTransparent,
      },
    };

    const {
      activeOpacity,
      disabled,
      children,
      style,
      textStyle,
      disabledStyle,
      disabledTextStyle,
      shadow,
      type,
      kind,
      uppercase,
      iconObject,
      iconPosition,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      onChange,
      value,
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

    const switcherProp = onChange && {
      onPress: () => {},
      onPressOut: onChange.bind(null, value),
    };

    const touchableProps = {
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
    };

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

    const buttonStyles = [
      stylesObject.baseButton,
      stylesObject.kind[kind].button,
      shadow ? stylesObject.buttonShadow : {},
      stylesObject.states[type],
      style,
    ];

    const textStyles = [
      stylesObject.baseText,
      stylesObject.kind[kind].text,
      textStyle,
      disabled ? disabledTextStyle : {},
    ];

    let leftIcon;
    let rightIcon;
    if (iconObject) {
      const icon = iconObject;
      leftIcon = iconPosition === 'left' && icon;
      rightIcon = iconPosition === 'right' && icon;
    }

    let content;
    if (children) {
      content = (
        <Text style={textStyles}>
          {uppercase ? children.toUpperCase() : children}
        </Text>
      );
    }

    return (
      <Animatable.View
        style={[stylesObject.container, disabled ? disabledStyle : {}]}
        {...animatableProps}
      >
        <TouchableOpacity
          {...touchableProps}
          {...switcherProp}
          disabled={disabled}
          style={buttonStyles}
          activeOpacity={activeOpacity}
          accessibilityTraits="button"
          accessibilityComponentType="button"
        >
          <View style={stylesObject.innerContainer}>
            {leftIcon}
            {content}
            {rightIcon}
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

Button.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  disabledTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  shadow: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'danger', 'success', 'naked']),
  kind: PropTypes.oneOf(['rounded', 'squared']),
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLongPress: PropTypes.func,
  iconObject: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  uppercase: PropTypes.bool,
  theme: PropTypes.object,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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

Button.defaultProps = {
  activeOpacity: 0.8,
  disabled: false,
  disabledStyle: { opacity: 0.3 },
  type: 'primary',
  kind: 'squared',
  onPress: () => {},
  onPressIn: () => {},
  onPressOut: () => {},
  onLongPress: () => {},
  iconPosition: 'right',
  uppercase: true,
  shadow: true,
};

export default Button;
