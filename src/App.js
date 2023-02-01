import logo from "./logo.svg";
import "./App.css";
import Allroutes from "./Allroutes";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <h1> Welcome to Pitchers</h1>
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;
