import React from 'react';
import '@babel/polyfill';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
