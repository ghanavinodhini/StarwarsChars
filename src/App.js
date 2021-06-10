import './App.css';
import logo from './images/Star_Wars_logo.svg.png';
 import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import FetchPeople from './components/FetchPeople';


function App() {
  return (
    <Router>
       <div className="App">
          <header className="App-header"> <img src={logo} alt="" height={100} width={250} /> </header>
          <Switch>         
            <Route path ="/" component={FetchPeople}/>
          </Switch>
      </div>
     </Router>   
  );
}

export default App;
