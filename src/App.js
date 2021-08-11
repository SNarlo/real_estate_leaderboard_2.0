import './App.css';
import SignUp from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import firebase from './firebase'
import React from 'react';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { PrivateRoute } from './Routes/PrivateRoute';

// Will handle user authentication


const App = (props) => {

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' >
              <Header />
              <Sidebar />
              <Leaderboard />
            </PrivateRoute>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>

  
  );
}

export default App;
