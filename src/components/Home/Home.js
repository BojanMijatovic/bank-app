import React from 'react';

import TabItems from '../TabItems/TabItems';
import AccountList from '../AccountList/AccountList';
import WidgetZone from '../WidgetZone/WidgetZone';

class Home extends React.Component {
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
      <>
        <TabItems />
        <AccountList accounts={accounts} />
        <WidgetZone />
      </>
    );
  }
}

export default Home;
