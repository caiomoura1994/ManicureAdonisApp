import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';

import styles from './styles';
import { theme } from '../../config/theme';

class Container extends React.Component {
  render() {
    const {
      children,
      barStyle,
      translucentStatusBar,
      backgroundColorStatusBar,
      backgroundColor,
      style,
    } = this.props;

    const styleContainer = [styles.container, { backgroundColor }, style];

    const propsStatusBar = {
      translucent: translucentStatusBar,
      barStyle,
      backgroundColor: backgroundColorStatusBar,
    };

    return (
      <View style={styleContainer}>
        <StatusBar {...propsStatusBar} />
        {children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.any,
  backgroundColorStatusBar: PropTypes.string,
  translucentStatusBar: PropTypes.bool,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

Container.defaultProps = {
  backgroundColorStatusBar: 'transparent',
  translucentStatusBar: true,
  barStyle: 'light-content',
  backgroundColor: theme.$CONTAINER_COLOR,
};

export default Container;
