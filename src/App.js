import logo from "./logo.svg";
import "./App.css";
import Allroutes from "./Allroutes";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <h1> Welcome to Pitchers</h1>
      <Router>
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;
