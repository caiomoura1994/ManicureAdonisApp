import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

class Text extends React.Component {
  render() {
    const {
      style, underline, italic, fontWeight,
    } = this.props;
    const textStyles = [
      styles.text,
      underline ? styles.textUnderline : {},
      italic ? styles.textItalic : {},
      { fontWeight },
      style,
    ];

    return <Animatable.Text {...this.props} style={textStyles} />;
  }
}

Text.propTypes = {
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  fontWeight: PropTypes.oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

Text.defaultProps = {
  underline: false,
  italic: false,
  fontWeight: 'normal',
};

export default Text;
