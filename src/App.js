import React from 'react';
import './app.css';
import Home from "./components/Home";
import About from "./components/About";
import {Router} from "@reach/router";
import Contact from "./components/Contact";
import Alert from "./components/Alert";


function App() {

  return(
      <Router>
        <Home path={'/'}/>
        <About path={'/about'}/>
        <Contact path={'/contact'}/>
        <Alert path={'/alert'}/>
      </Router>
  )
}

export default App;
