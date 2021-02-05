
import './App.css';
import React, { Component } from 'react'
import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  link
} from "react-router-dom";
import 



function App() {
  return(
    <Router>
      <Switch>
        <Route render={() => <ShopPage />} path="/my-shop" />
        <Redirect exact from="*" to="/my-shop" />
      </Switch>
    </Router>
  )
}

export default App;
