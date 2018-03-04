import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from './components';
// quando o icons da pau
// rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

import { theme } from './config/theme';
import Navigator from './config/routes';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' }),
  // link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache(),
});

EStyleSheet.build(theme);

const Apollo = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default Apollo;

// ================================= example apollo request =================================
// const GET_DOG = gql`
//   query {
//     dog(breed: "bulldog") {
//       id
//       breed
//       displayImage
//     }
//   }
// `;

// export default (App = () => (
//   <ApolloProvider client={client}>
//     <Query query={GET_DOG}>
//       {({ loading, error, data }) => {
//         if (loading) return <Text>Loading...</Text>;
//         if (error) return <Text>Error :(</Text>;

//         return (
//           <Text>
//             {data.dog.displayImage}-{data.dog.breed}
//           </Text>
//         );
//       }}
//     </Query>
//   </ApolloProvider>
// ));

// ================================= example apollo request =================================
