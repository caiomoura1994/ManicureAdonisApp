import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import styles from './styles';

class H6 extends React.Component {
  render() {
    const { style } = this.props;
    const textStyles = [styles.h6, style];

    return <Text {...this.props} style={textStyles} />;
  }
}

H6.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

export default H6;
