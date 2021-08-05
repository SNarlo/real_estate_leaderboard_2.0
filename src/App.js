import './App.css';
import SignUp from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import firebase from './firebase'
import React from 'react';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Will handle user authentication


const App = (props) => {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Dashboard} /> 
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
