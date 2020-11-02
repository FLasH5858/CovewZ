import React from "react";
import "./App.css";
import Nav from './Nav';
import Stats from './Stats';
import News from './News';

import {BrowserRouter as Router, Route } from  'react-router-dom';
//import { Switch } from "@material-ui/core";

function App()
{
 return(
  <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/stats" component={Stats} />
      <Route path="/news" component={News} />
      
    </div>
  </Router>
 );
}

const Home = () => (
  <div>
   </div>
);

export default App;

