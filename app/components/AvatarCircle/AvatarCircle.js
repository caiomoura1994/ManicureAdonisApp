import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

class AvatarCircle extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.props.onPress}
        disabled={this.props.disableOnPress}
      >
        <View style={[styles.container, this.props.style]}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

AvatarCircle.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  onPress: PropTypes.object,
  disableOnPress: PropTypes.bool,
};

export default AvatarCircle;
