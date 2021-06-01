import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Table from "./components/Table";
import TableDataRow from "./components/TableDataRow";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";



function App() {

    const [people,setPeople] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [searchCharacter, setSearchCharacter] = useState("");
    
    
    useEffect(() => {
        async function fetchPeople(){
          let response = await fetch('http://swapi.dev/api/people/?format=json');
          let data = await response.json();

          setPeople(data.results);
        }
        fetchPeople();
  },[]);

    console.log('data', people);

    function Search(rows){
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    
    }
    
    
    
  return (
    <div className="App">
      <header className="App-header">
        Star Wars API

        <span className="searchBox">
          <div className="searchInput">
            <input type="text" placeholder="Search" value={searchCharacter} onChange={(e)=>
            setSearchCharacter(e.target.value)} />
          </div>
          <div className="searchInput">
            <FaSearch style={{display:"inline-flex",background:"blue",height:"20px", marginBottom:"30px"}}/>
          </div>
      </span>

      </header>
      <Router>
        <Switch>
          <Route path='/'> <Home /> </Route>
        </Switch>
      </Router>
      
      <Table rows={Search(people)} />
    </div>
  );
}

export default App;
