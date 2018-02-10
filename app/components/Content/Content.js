import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import styles from './styles';

class Content extends React.Component {
  render() {
    const {
      children, style, scrollView, backgroundColor,
    } = this.props;

    const styleContent = [styles.container, { backgroundColor }, style];

    if (!scrollView) {
      return (
        <View style={styleContent}>
          {children}
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={styleContent}>
        {children}
      </ScrollView>
    );
  }
}

Content.propTypes = {
  children: PropTypes.any,
  scrollView: PropTypes.bool,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

Content.defaultProps = {
  scrollView: false,
};

export default Content;
