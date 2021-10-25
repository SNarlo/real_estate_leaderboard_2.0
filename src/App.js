import './App.css';
import SignUp from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import React from 'react';
import { AuthProvider } from './Contexts/AuthContext';
import { UserProfileProvider } from './Contexts/UserProfileContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './Routes/PrivateRoute';
import { LeaderboardDashboard } from './Components/Dashboards/LeaderboardDashboard';
import { ForgotPassword } from './Components/Authentication/ForgotPassword';
import ProfileSettingsDashboard from './Components/Dashboards/ProfileSettingsDashboard';
import AgentProfileDashboard from './Components/Dashboards/AgentProfileDashboard';


// Will handle user authentication

const App = () => {

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <UserProfileProvider>
          <Switch>
            <PrivateRoute exact path='/' component={LeaderboardDashboard}/>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword}/>
            <Route path='/profile-settings' component={ProfileSettingsDashboard}/>
            <Route path='/agent-profile-dashboard' component={AgentProfileDashboard}/>
          </Switch>
          </UserProfileProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
