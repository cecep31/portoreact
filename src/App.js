
import {Button } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";
import About from './Route/About';
import Funnya from './Route/home/ininya'




function App() {
  return (
    <div>
      <Button type='primary'>ant</Button>
      <Router>
        <nav>
          <NavLink to="/" >home</NavLink>
          <NavLink to="/about" >about</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Funnya />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}




export default App;
