import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavTop from './components/NavTop';
import Home from './components/Home';
import Table from "./components/Table";
import TableDataRow from "./components/TableDataRow";


function App() {

    const [people,setPeople] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    
    useEffect(() => {
        async function fetchPeople(){
          let response = await fetch('http://swapi.dev/api/people/?format=json');
          let data = await response.json();

          setPeople(data.results);
        }

        fetchPeople();
    },[]);

    console.log('data', people);

    
  return (
    <div className="App">
      <header className="App-header">
         <NavTop />
      </header>
      <Router>
        <Switch>
          <Route path='/'> <Home /> </Route>
        </Switch>
      </Router>
      
      <Table rows={people.map(person => <TableDataRow character={person} key={person.name} />)} />
    </div>
  );
}

export default App;
