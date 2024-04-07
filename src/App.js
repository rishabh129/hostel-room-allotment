import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { database } from './components/firebase'; // Import your Firebase auth module
import LoginPage from './components/LoginPage';
import About from './components/About';
import ApplicationPage from './components/ApplicationPage';
import Profile from './components/profile'; 
import ContactForm from './components/contactus';
import adminDashboard from './components/adminDashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    database.currentUser ? <Component {...props} /> : <Redirect to="/dashboard" />
  )} />
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} /> 
          <Route path="/application" component={ApplicationPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/contactus" component={ContactForm} />
          <Route path="/admin" component={adminDashboard} />
          
          <Route path="/" component={LoginPage} />
          
          
                             
        </Switch>
      </div>
    </Router>
  );
};

export default App;
