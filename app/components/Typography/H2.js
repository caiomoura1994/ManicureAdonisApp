import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import styles from './styles';

class H2 extends React.Component {
  render() {
    const { style } = this.props;
    const textStyles = [styles.h2, style];

    return <Text {...this.props} style={textStyles} />;
  }
}

H2.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

export default H2;
