import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

class SubCategory extends React.Component {
  render() {
    return <View>{this.props.children}</View>;
  }
}

export default SubCategory;
