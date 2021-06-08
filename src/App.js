import logo from './logo.svg';
import './App.css';
 import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
//import Table from "./components/Table";
//import TableDataRow from "./components/TableDataRow";
//import {Link} from "react-router-dom";
//import {FaSearch} from "react-icons/fa";
import FetchPeople from './components/FetchPeople';



function App() {

   /*  const [people,setPeople] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [searchCharacter, setSearchCharacter] = useState("");
    const [nextPg, setNextPg]= useState("");
    
    useEffect(() => {
        async function fetchPeople(){
          let response = await fetch('http://swapi.dev/api/people/?format=json');
          let data = await response.json();

          setPeople(data.results);
          setNextPg(data.next);
        }
        fetchPeople();
  },[]);
    console.log('next Page',nextPg);
    console.log('data', people);

    function Search(rows){
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    
    } */
    
  return (
    
    <Router>
       <div className="App">
      
          <Switch>         
            <Route path ="/" component={FetchPeople}/>
          </Switch>
          
      </div>
     </Router>
      
         
  );
}

export default App;
