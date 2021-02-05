
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import About from './Route/About';



function App() {
  return(
    <Router>
      <Switch>
        <Route render={() => <About />} path="/about" />
        <Redirect exact from="*" to="/about" />
      </Switch>
    </Router>
  )
}

export default App;
