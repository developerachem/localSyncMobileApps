import {RealmProvider} from '@realm/react';
import React from 'react';
import Home from './src/components/home';
import {Profile} from './src/utils/realm';

const App = () => {
  return (
    <>
      <RealmProvider schema={[Profile]}>
        <Home />
      </RealmProvider>
    </>
  );
};

export default App;
