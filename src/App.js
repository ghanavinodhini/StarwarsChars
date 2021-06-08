import logo from './logo.svg';
import './App.css';
 import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import FetchPeople from './components/FetchPeople';



function App() {
  return (
    <Router>
       <div className="App">
          <header className="App-header"> Star Wars People </header>
          <Switch>         
            <Route path ="/" component={FetchPeople}/>
          </Switch>
      </div>
     </Router>   
  );
}

export default App;
