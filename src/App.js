import React from 'react';
import './app.css';
import Home from "./components/Home";
import About from "./components/About";
import {Router} from "@reach/router";
import Contact from "./components/Contact";


function App() {
  return(
      <Router>
        <Home path={'/'}/>
        <About path={'/about'}/>
        <Contact path={'/contact'}/>
      </Router>
  )
}

export default App;
