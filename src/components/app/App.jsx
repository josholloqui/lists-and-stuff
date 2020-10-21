import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from '../list/List';
import Details from '../details/Details';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/" 
          exact
          render={(routerProps) => <List {...routerProps} />} 
        />
        <Route 
          path="/details/:id" 
          exact
          render={(routerProps) => <Details {...routerProps} />} 
        />
      </Switch>
    </Router> 
  );
}
