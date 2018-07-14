import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// quando o icons da pau
// rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

import { theme } from './config/theme';
import Navigator from './config/routes';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

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

// ================================= example apollo request =================================

// const allUsers = gql`
//   query {
//     allUsers {
//       id
//       name
//       lastName
//       gender
//     }
//   }
// `;

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
//     <Query query={allUsers}>
//       {({ loading, error, data }) => {
//         if (error) {
//           return <Text>Error :(</Text>;
//         }
//         if (loading) return <Text>Loading...</Text>;
//         return (
//           <Text>
//             {data.allUsers[0].id} - {data.allUsers[0].name} {data.allUsers[0].lastName}{' '}
//             {data.allUsers[0].gender}
//           </Text>
//         );
//       }}
//     </Query>
//   </ApolloProvider>
// ));

// ================================= example apollo request =================================
