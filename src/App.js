// import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Webpage from './components/webpage';
import { BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* <Home></Home> */}
    <Router>
       <Header></Header>

      <Route component={Webpage} path="/webpage"></Route>
      <Route component={Home} path="/home"></Route>
    </Router>
    </div>
  );
}

export default App;
