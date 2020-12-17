import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './_start_gql';




export default function App({children}) {
  return (
    <ApolloProvider client={client}>
     	{children}
    </ApolloProvider>
  );
}

