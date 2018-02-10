import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import { LinearGradient, presetColors } from './LinearGradient';

Animated.LinearGradient = Animated.createAnimatedComponent(LinearGradient);

class AnimatedGradient extends Component {
  state = {
    color0: new Animated.Value(0),
    color1: new Animated.Value(0),
  };

  componentDidMount = () => {
    this.startAnimation();
  };

  startAnimation = () => {
    const { color0, color1 } = this.state;
    const { customColors, speed } = this.props;
    [color0, color1].forEach(color => color.setValue(0));

    Animated.parallel([color0, color1].map(animatedColor =>
      Animated.timing(animatedColor, {
        toValue: customColors.length,
        duration: customColors.length * speed,
        easing: Easing.linear,
      }))).start(this.startAnimation);
  };

  render() {
    const { color0, color1 } = this.state;
    const {
      customColors, children, points, style,
    } = this.props;
    const preferColors = [];

    while (preferColors.length < 2) {
      preferColors.push(customColors
        .slice(preferColors.length)
        .concat(customColors.slice(0, preferColors.length + 1)));
    }
    const interpolatedColors = [color0, color1].map((animatedColor, index) =>
      animatedColor.interpolate({
        inputRange: Array.from({ length: customColors.length + 1 }, (v, k) => k),
        outputRange: preferColors[index],
      }));

    return (
      <Animated.LinearGradient
        style={[style]}
        points={points}
        color0={interpolatedColors[0]}
        color1={interpolatedColors[1]}
      >
        {children}
      </Animated.LinearGradient>
    );
  }
}

AnimatedGradient.propTypes = {
  customColors: PropTypes.array,
  speed: PropTypes.number,
  points: PropTypes.object,
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AnimatedGradient.defaultProps = {
  customColors: presetColors.instagram,
  speed: 4000,
  points: {
    start: { x: 0, y: 0.4 },
    end: { x: 1, y: 0.6 },
  },
};

export default AnimatedGradient;
