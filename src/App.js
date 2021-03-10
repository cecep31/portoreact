import React, { Component } from "react";
import "./index.css";

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

              <Home />

      </div>
    );
  }
}

export default App;
