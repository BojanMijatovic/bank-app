import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TabItems from './components/TabItems/TabItems';
import AccountList from './components/AccountList/AccountList';
import WidgetZone from './components/WidgetZone/WidgetZone';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '0',
        name: 'Bojan Mijatovic',
        email: '',
        accounts: [
          {
            name: 'regular',
            id: '5844660845754',
            currency: 'EUR',
            balance: 4720.0,
            available: 4000.0,
          },
          {
            name: 'internet',
            id: '16048786084575494',
            currency: 'EUR',
            balance: 320.0,
            available: 320.0,
          },
        ],
      },
    };
  }

  render() {
    const { user } = this.state;
    const { accounts } = user;
    return (
      <div className='mx-auto text-center max-w-6xl bg-gradient-to-r from-yellow-500  to-yellow-600'>
        <Header name={user.name} />
        <Navbar />
        <TabItems />
        <AccountList accounts={accounts} />
        <WidgetZone />
      </div>
    );
  }
}

export default App;
