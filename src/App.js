import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
