import React from 'react';
import { GraphqlProvider } from './graphql';

import { Home } from './pages';


import './App.scss';

function App() {
  return (
    <GraphqlProvider>
      <Home />
    </GraphqlProvider>
   
  );
}

export default App;
