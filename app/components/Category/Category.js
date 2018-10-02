import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

class Category extends React.Component {
  render() {
    const { category, onPress } = this.props;
    return (
      <TouchableHighlight onPress={() => onPress(category)}>
        <View>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: category.icon }}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Text>{category.name}</Text>
            </CardItem>
          </Card>
        </View>
      </TouchableHighlight>
    );
  }
}

Category.propTypes = {
  onPress: PropTypes.func,
  category: PropTypes.object,
};
export default Category;
