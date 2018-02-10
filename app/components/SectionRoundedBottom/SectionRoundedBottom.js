import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedGradient from '../AnimatedGradient';

import { theme } from '../../config/theme';
import styles from './styles';

class SectionRoundedBottom extends React.Component {
  renderRoundedBottom = () => {
    const {
      color,
      animated,
      startGradient,
      endGradient,
      colorsGradient,
      locationsGradient,
      speedAnimatedGradient,
      pointsAnimatedGradient,
    } = this.props;

    const sectionStyle = [styles.oval, { backgroundColor: color }];
    const linearGradientStyle = [styles.oval];

    const propsLinearGradient = {
      start: startGradient,
      end: endGradient,
      locations: locationsGradient,
      colors: colorsGradient,
    };

    const propsAnimatedGradient = {
      customColors: colorsGradient,
      speed: speedAnimatedGradient,
      ponits: pointsAnimatedGradient,
    };

    if (colorsGradient && animated) {
      return <AnimatedGradient {...propsAnimatedGradient} style={linearGradientStyle} />;
    } else if (colorsGradient) {
      return <LinearGradient {...propsLinearGradient} style={linearGradientStyle} />;
    } else if (color) {
      return <View style={sectionStyle} />;
    }
    return <View />;
  };

  render() {
    const { children, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderRoundedBottom()}
        <View style={styles.innercontainer}>
          {children}
        </View>
      </View>
    );
  }
}

SectionRoundedBottom.propTypes = {
  animated: PropTypes.bool,
  startGradient: PropTypes.object,
  endGradient: PropTypes.object,
  locationsGradient: PropTypes.array,
  colorsGradient: PropTypes.array,
  pointsAnimatedGradient: PropTypes.object,
  speedAnimatedGradient: PropTypes.number,
  children: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

SectionRoundedBottom.defaultProps = {
  color: theme.$SECTION_ROUNDED_BOTTOM_COLOR,
};

export default SectionRoundedBottom;
