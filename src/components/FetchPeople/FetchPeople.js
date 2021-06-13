import {FaSearch} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Table from "../../components/Table";

function FetchPeople() {

    const [people,setPeople] = useState([]);
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
    console.log('next Page in FetchPeople',nextPg);
    console.log('data in FetchPeople', people);

    function Search(rows){
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    
    }


    return(
        <div className="searchBox">
            <div className="searchInput">
                <input type="text" placeholder="Search" value={searchCharacter} onChange={(e)=>
                setSearchCharacter(e.target.value)} />
            </div>
            <div className="searchInput">
                <FaSearch style={{display:"inline-flex",background:"blue",height:"20px", marginBottom:"30px"}}/>
            </div>

            {/* <Table rows={Search(people)} nextPage={nextPg} /> */}

            <Table rows = {Search(people)} nextPage = {nextPg} />
        </div>
        
            
    
    )
}

export default FetchPeople;