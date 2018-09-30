import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { theme } from './config/theme';
import Navigator from './config/routes';

const client = new ApolloClient({
  // link: new HttpLink({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' }),
  // link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  link: new HttpLink({ uri: 'https://adonis-api-project.herokuapp.com/graphql' }),
  cache: new InMemoryCache(),
});

EStyleSheet.build(theme);

const Apollo = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default Apollo;

