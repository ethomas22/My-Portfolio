import './App.css';
import Index from './pages/index';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/contact"><Contact></Contact></Route>
          <Route exact path="/"><Index></Index></Route>
          <Route exact path="/portfolio"><Portfolio></Portfolio></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
