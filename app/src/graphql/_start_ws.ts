import { WebSocketLink } from '@apollo/client/link/ws';

export const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});
