import React, { Component } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import About from "./Route/About";
import Home from "./Route/home";
import Contact from './Route/contact'

import './App.css';


// function App() {
//   return (
//     <Router>
//       function Pindah (this.props.) {
//         <Redirect exact from="*" to="{hal.hal}" />
//       }
//       <NavLink exact to="/about">
//         <Button onClick={Pindah("/about")} variant="contained" to="/about">pindah</Button>
//       </NavLink>

//       <Switch>
//         <Route exact path="/">
//           <Funnya />
//         </Route>
//         <Route exact path="/about">
//           <About />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
const Navbark = () => {
  return (

    <NavLink to="/about"></NavLink>
    )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      nama: "cecep januardi",
    };
  }

  changenama = () => {
    this.setState({
      nama: "jamuardi"
    });

  };

  render() {
    return (
      <div>
        
        <Router>
          <Navbark />
          <Switch>
            <Route exact path="/">
              <Redirect exact from="*" to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
