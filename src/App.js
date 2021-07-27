import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Header from './Components/Header/Header';

// Will handle user authentication


const App = () => {
  return (
    <div className="App">
      < Header agentName='John Stevenson' branch='Toowong' image=''/> 
      < Sidebar />
    </div>
  );
}

export default App;
