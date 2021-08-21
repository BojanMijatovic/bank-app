import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Products from './pages/Products/Products';
import Transactions from './pages/Transactions/Transactions';
import News from './pages/News/News';
import Accounts from './pages/Accounts/Accounts';
import Cards from './pages/Cards/Cards';
import Loans from './pages/Loans/Loans';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='mx-auto text-center max-w-6xl bg-gradient-to-r from-yellow-500  to-yellow-600'>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/transactions' component={Transactions} />
        <Route path='/news' component={News} />
        <Route path='/accounts' component={Accounts} />
        <Route path='/cards' component={Cards} />
        <Route path='/loans' component={Loans} />
      </Switch>
    </div>
  );
};

export default App;
