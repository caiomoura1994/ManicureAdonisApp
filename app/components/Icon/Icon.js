import React from 'react';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as Animatable from 'react-native-animatable';

import { theme } from '../../config/theme';

class Icon extends React.Component {
  render() {
    const {
      iconType,
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

    const iconsSelect = () => {
      switch (iconType) {
        case 'Entypo':
          return (
            <Animatable.View {...animatableProps}>
              <Entypo {...this.props} />
            </Animatable.View>
          );
        case 'EvilIcons':
          return (
            <Animatable.View {...animatableProps}>
              <EvilIcons {...this.props} />
            </Animatable.View>
          );
        case 'FontAwesome':
          return (
            <Animatable.View {...animatableProps}>
              <FontAwesome {...this.props} />
            </Animatable.View>
          );
        case 'Ionicons':
          return (
            <Animatable.View {...animatableProps}>
              <Ionicons {...this.props} />
            </Animatable.View>
          );
        case 'MaterialIcons':
          return (
            <Animatable.View {...animatableProps}>
              <MaterialIcons {...this.props} />
            </Animatable.View>
          );
        case 'MaterialCommunityIcons':
          return (
            <Animatable.View {...animatableProps}>
              <MaterialCommunityIcons {...this.props} />
            </Animatable.View>
          );
        case 'Octicons':
          return (
            <Animatable.View {...animatableProps}>
              <Octicons {...this.props} />
            </Animatable.View>
          );
        case 'Zocial':
          return (
            <Animatable.View {...animatableProps}>
              <Zocial {...this.props} />
            </Animatable.View>
          );
        case 'SimpleLineIcons':
          return (
            <Animatable.View {...animatableProps}>
              <SimpleLineIcons {...this.props} />
            </Animatable.View>
          );
        default:
          return undefined;
      }
    };

    return iconsSelect();
  }
}

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconType: PropTypes.oneOf([
    'Entypo',
    'EvilIcons',
    'EvilIcons',
    'FontAwesome',
    'Ionicons',
    'MaterialIcons',
    'MaterialCommunityIcons',
    'Octicons',
    'Zocial',
    'SimpleLineIcons',
  ]).isRequired,
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

Icon.defaultProps = {
  size: theme.$BUTTON_ICON_SIZE,
  color: theme.$BUTTON_ICON_COLOR,
};

export default Icon;
