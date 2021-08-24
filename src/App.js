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
import LogInAndOut from './pages/LogInAndOut/LogInAndOut';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in. add user to state and create user profile to firestore
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        console.log(user);
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //  name={this.state.currentUser.displayName}

  render() {
    return (
      <div className='mx-auto text-center max-w-6xl bg-gradient-to-r from-yellow-500  to-yellow-600'>
        <Navbar currentUser={this.state.currentUser} />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/transactions' component={Transactions} />
          <Route path='/news' component={News} />
          <Route path='/accounts' component={Accounts} />
          <Route path='/cards' component={Cards} />
          <Route path='/loans' component={Loans} />
          <Route path='/logIn' component={LogInAndOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
