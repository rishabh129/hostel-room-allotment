import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { database } from './components/firebase'; // Import your Firebase auth module
import LoginPage from './components/LoginPage';
import About from './components/About';
import NewApplication from './components/NewApplication';
import Profile from './components/profile'; 
import ContactForm from './components/contactus';
import adminDashboard from './components/adminDashboard';
import ApplicationListPage from './components/Applicationlist';
import AppStatus from './components/AppStatus';
import VacateRoomForm from './components/VacateRoom';
import SwapRoomApplicationForm from './components/swaproom';
import ViewNewRoomForm from './components/ViewNewRoomForm';
import ListOfRooms from './components/ListOfRooms';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    database.currentUser ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} /> 
          <Route path="/application/new" component={NewApplication} />
          <Route path="/profile" component={Profile} />
          <Route path="/contactus" component={ContactForm} />
          <PrivateRoute path="/admin" component={adminDashboard} />
          <Route path="/applications" component={ApplicationListPage} />
          <Route path="/application/status" component={AppStatus} />
          <Route path="/application/swap" component={SwapRoomApplicationForm} />
          <Route path="/application/vacate" component={VacateRoomForm} />
          <Route path="/view-new-room" component={ViewNewRoomForm} />
          <Route path="/rooms/list" component={ListOfRooms} />
          
          <Route path="/" component={LoginPage} />
          
          
                             
        </Switch>
      </div>
    </Router>
  );
};

export default App;
