import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './Login';
import Profile from './componant/profile';
import BestBooks from './BestBooks';
import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props);
    return(
      <>
        <Router>
          <Header />
            
            <Switch>
              <Route exact path="/">
              {!isAuthenticated ? <Login/> : <BestBooks/>}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile"></Route>
              <Profile/>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default App;
