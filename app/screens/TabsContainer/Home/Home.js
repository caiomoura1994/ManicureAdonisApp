import React from 'react';
import { View, SectionList, FlatList } from 'react-native';
import { AvatarCircle, Container, Content, Input, Text, Icon } from '../../../components';

import strings from '../../../config/strings';
import styles from './styles';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {/* recomendado */}
            <Text style={styles.textOnHigh}> Em alta no Adonis</Text>
            <SectionList
              style={styles.SectionListOnHigh}
              horizontal
              sections={[
                {
                  title: 'Recomendado',
                  data: [
                    { key: 'a', category: 'test', price: 1.99 },
                    { key: 'b', category: 'test', price: 1.99 },
                    { key: 'a1', category: 'test', price: 1.99 },
                    { key: '2', category: 'test', price: 1.99 },
                    { key: 'a4', category: 'test', price: 1.99 },
                    { key: '3', category: 'test', price: 1.99 },
                  ],
                },
              ]}
              renderItem={({ item }) => (
                <View style={styles.viewOnHigh}>
                  <AvatarCircle>
                    <Icon iconType="FontAwesome" name="user" size={60} />
                  </AvatarCircle>
                  <Text style={styles.textOnHigh}> {item.category} </Text>
                  <Text style={styles.textPriceOnHigh}> A partir de R${item.price} </Text>
                </View>
              )}
            />

            {/* Categorias */}
            <SectionList
              style={styles.SectionListContent}
              sections={[
                {
                  title: 'Categorias',
                  data: [
                    { key: 'a', category: 'test', price: 1.99 },
                    { key: 'b', category: 'test', price: 1.99 },
                    { key: 'a1', category: 'test', price: 1.99 },
                    { key: '2', category: 'test', price: 1.99 },
                    { key: 'a4', category: 'test', price: 1.99 },
                    { key: '3', category: 'test', price: 1.99 },
                  ],
                },
              ]}
              renderItem={({ item }) => (
                <View>
                  <AvatarCircle>
                    <Icon iconType="FontAwesome" name="user" size={60} />
                  </AvatarCircle>
                  <Text style={styles.textCategory}> {item.category} </Text>
                  <Text style={styles.textPrice}> A partir de R${item.price} </Text>
                </View>
              )}
              renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
