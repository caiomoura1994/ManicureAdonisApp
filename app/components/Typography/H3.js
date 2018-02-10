import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import styles from './styles';

class H3 extends React.Component {
  render() {
    const { style } = this.props;
    const textStyles = [styles.h3, style];

    return <Text {...this.props} style={textStyles} />;
  }
}

H3.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

export default H3;
