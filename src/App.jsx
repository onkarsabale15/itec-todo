import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Nav';
import Taskscontainer from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <Taskscontainer/>
    </div>
  );
}

export default App;
