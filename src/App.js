import logo from './logo.svg';
import './App.css';
import Index from './pages/index';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/contact"><Contact></Contact></Route>
          <Route exact path="/"><Index></Index></Route>
          <Route exact path="/portfolio"><Portfolio></Portfolio></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
