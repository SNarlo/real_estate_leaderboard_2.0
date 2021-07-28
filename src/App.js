import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Header from './Components/Header/Header';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import firebase from './firebase'
import React from 'react';

// Will handle user authentication


const App = (props) => {

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection().get()
    }
  }), []

  return (
    <div className="App">
      < Header agentName='John Stevenson' branch='Toowong' image=''/> 
      < Sidebar />
      < Leaderboard />
    </div>
  );
}

export default App;
