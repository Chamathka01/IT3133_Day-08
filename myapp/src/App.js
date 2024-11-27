import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';


function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
     </Router> 
    </div>
  );
}

export default App;
