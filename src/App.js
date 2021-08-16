import './App.css';
import SignUp from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import React, { useState } from 'react';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './Routes/PrivateRoute';
import { LeaderboardDashboard } from './Components/Dashboards/LeaderboardDashboard';
import { ForgotPassword } from './Components/Authentication/ForgotPassword';

// Will handle user authentication

const App = () => {

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={LeaderboardDashboard} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
