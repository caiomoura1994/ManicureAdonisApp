import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NativeLinearGradient from 'react-native-linear-gradient';
import rgb2hex from 'rgb2hex';

import styles from './styles';

class LinearGradient extends Component {
  render() {
    const {
      color0, color1, children, points, style,
    } = this.props;
    const gStart = points.start;
    const gEnd = points.end;
    return (
      <NativeLinearGradient
        colors={[color0, color1].map(c => rgb2hex(c).hex)}
        start={gStart}
        end={gEnd}
        style={[styles.linearGradient, style]}
      >
        {children}
      </NativeLinearGradient>
    );
  }
}

const presetColors = {
  instagram: [
    'rgb(106, 57, 171)',
    'rgb(151, 52, 160)',
    'rgb(197, 57, 92)',
    'rgb(231, 166, 73)',
    'rgb(181, 70, 92)',
  ],
  firefox: ['rgb(236, 190, 55)', 'rgb(215, 110, 51)', 'rgb(181, 63, 49)', 'rgb(192, 71, 45)'],
  sunrise: [
    'rgb(92, 160, 186)',
    'rgb(106, 166, 186)',
    'rgb(142, 191, 186)',
    'rgb(172, 211, 186)',
    'rgb(239, 235, 186)',
    'rgb(212, 222, 206)',
    'rgb(187, 216, 200)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ],
};

LinearGradient.propTypes = {
  color0: PropTypes.string,
  color1: PropTypes.string,
  children: PropTypes.any,
  points: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

export { LinearGradient, presetColors };
