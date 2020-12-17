import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { wsLink } from './_start_ws';
import { httpLink } from './_start_http';


const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});



