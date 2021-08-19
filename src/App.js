import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TabItems from './components/TabItems/TabItems';
import AccountList from './components/AccountList/AccountList';
import WidgetZone from './components/WidgetZone/WidgetZone';

function App() {
  return (
    <div className='   mx-auto text-center max-w-6xl bg-gradient-to-r from-yellow-500  to-yellow-600'>
      <Header />
      <Navbar />
      <TabItems />
      <AccountList />
      <WidgetZone />
    </div>
  );
}

export default App;
