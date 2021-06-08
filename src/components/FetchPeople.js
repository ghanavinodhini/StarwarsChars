import React, {useState,useEffect} from "react";
import Table from "./Table";
import {FaSearch} from "react-icons/fa";



function FetchPeople() {

    const [people,setPeople] = useState([]);
    const [nextPg, setNextPg]= useState("");
    const [previousPg, setPreviousPg] = useState("");
    const [searchCharacter, setSearchCharacter] = useState("");

    let nextButton;
    let previousButton;

    useEffect(() => {
        async function fetchDataApi(){
            let response = await fetch('http://swapi.dev/api/people/?format=json');
            let data = await response.json();
            console.log(" Data fetched in FetchDataApi:" + data.results);
            setPeople(data.results);
            setNextPg(data.next);
            setPreviousPg(data.previous);
        }
        fetchDataApi();
    }, [])

    function Search(rows)
    {
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    }

    const handleNextClick = () => {
        //seturlPage(nextPage);
        console.log("inside handle click");
        //console.log("urlPage state value:"+urlPage);
        console.log("NextPg value:"+nextPg);
        if(nextPg!== ""){
            console.log("Inside return");
                async function currentTableData() {
                    let response = await fetch(nextPg);
                    let data = await response.json();
                    console.log("Next data fetched in currentTableData:"+data.results);
                    setPeople(data.results);
                    setNextPg(data.next);
                    setPreviousPg(data.previous);
                }
                currentTableData();
        
        }
    }

    const handlePreviousClick = () => {
        //seturlPage(nextPage);
        console.log("inside handle previous click");
        //console.log("urlPage state value:"+urlPage);
        console.log("PreviousPg value:"+previousPg);
        if(previousPg!== ""){
            console.log("Inside return");
                async function currentTableData() {
                    let response = await fetch(previousPg);
                    let data = await response.json();
                    console.log("Next data fetched in currentTableData:"+data.results);
                    setPeople(data.results);
                    setNextPg(data.next);
                    setPreviousPg(data.previous);
                }
                currentTableData();
        }
    }

    if (nextPg !== null){
        console.log("Inside if condition nextPg value:"+nextPg);
        nextButton = <button onClick={ handleNextClick }> Next </button>
    }

    if (previousPg !== null){
        console.log("Inside if condition previousPg value:"+previousPg);
        previousButton = <button onClick={ handlePreviousClick }> Prev </button>
    }

    return (
        <div className="table-data-container">
            <div className="searchBox">
                <div className="searchInput">
                    <input type="text" placeholder="Search" value={searchCharacter} onChange={(e)=>
                    setSearchCharacter(e.target.value)} />
                </div>
                <div className="searchInput">
                        <FaSearch style={{display:"inline-flex",background:"blue",height:"20px", marginBottom:"30px"}}/>
                </div>
                </div>
                <Table rows={Search(people)} nextPage={nextPg} prevPage={previousPg}/> 
            
                    {previousButton} {nextButton} 
                        
                    {/* <button onClick={ handleClick }> Next </button> */}
                </div>
    )
            
            
}

export default FetchPeople;

 