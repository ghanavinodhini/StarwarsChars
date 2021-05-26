import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Table from "./components/Table";
import TableDataRow from "./components/TableDataRow";



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
      </header>
      <Router>
        <Switch>
          <Route path='/'> <Home /> </Route>
        </Switch>
      </Router>
      <div>
          <input type="text" value={searchCharacter} onChange={(e)=>
          setSearchCharacter(e.target.value)} />
      </div>
      <Table rows={Search(people)} />
    </div>
  );
}

export default App;
