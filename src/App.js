import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Header from './Components/Header/Header';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import SignUp from './Components/Authentication/Signup';
import firebase from './firebase'
import React from 'react';
import { AuthProvider } from './Contexts/AuthContext';


// Will handle user authentication


const App = (props) => {

  return (
    <div className="App">
      {/* < Header agentName='John Stevenson' branch='Toowong' image=''/> 
      < Sidebar />
      < Leaderboard /> */}

      <AuthProvider>
        <SignUp />
      </AuthProvider>
      
    </div>
  );
}

export default App;
