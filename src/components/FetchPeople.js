import React, {useState,useEffect} from "react";
import Table from "./Table";
import '../css/fetchPeople.css';
import {FaSearch} from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


function FetchPeople() {

    const [people,setPeople] = useState([]);
    const [nextPg, setNextPg]= useState("");
    const [previousPg, setPreviousPg] = useState("");
    const [searchCharacter, setSearchCharacter] = useState("");

    let nextButton;
    let previousButton;
    //let newUrlVal;

    //Get api data
    useEffect(() => {
        async function fetchDataApi(){
            let response = await fetch('https://swapi.dev/api/people/?format=json');
            let data = await response.json();
            console.log(" Data fetched in FetchDataApi:" + data.results);
            setPeople(data.results);
            setNextPg(data.next);
            setPreviousPg(data.previous);
        }
        fetchDataApi();
    }, [])

    //search starwars character in a page
    function Search(rows)
    {
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    }

  //Get api data for next page
    const handleNextClick = () => {
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

    //Get api data for previous page
    const handlePreviousClick = () => {
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

        const getNewUrl = () => 
        {
        /* newUrlVal = nextPg;
        console.log("Inside if condition nextPg value:"+newUrlVal);
        let stringUrl = newUrlVal.length;
        console.log("url length:"+stringUrl);
        let substring1 = newUrlVal.substr(0,5);
        let substring2 = newUrlVal.substr(6,stringUrl-1);
        console.log("substring1 value: "+ substring1);
        console.log("substring2 value: "+ substring2);
        var newNextUrlVal = newUrlVal.replace(newUrlVal.substr(0,5),"https:");
        console.log("new value url:"+ newNextUrlVal);
        setNextPg(newNextUrlVal);
        console.log("NextPg value after replace:"+nextPg);*/

        
        }
        getNewUrl();
        nextButton = <button className="nextBtn" onClick={ handleNextClick } data-tooltip = "Next Page" style={ {backgroundColor:"white", width:"50px", height:"30px",align:"center",cursor:"pointer",marginLeft:"200px"}}> <FcNext /> </button>
    }

    if (previousPg !== null){
        console.log("Inside if condition previousPg value:"+previousPg);
        previousButton = <button className="prevBtn" onClick={ handlePreviousClick } data-tooltip = "Prev Page" style={ {backgroundColor:"white", width:"50px",height:"30px", align:"center",cursor:"pointer",marginRight:"200px"}}> <FcPrevious /> </button>
    }

    return (
        <div className="table-data-container">
            <div className="searchBox">
                    <input type="text" placeholder="Search starwars character in this page" value={searchCharacter} onChange={(e)=>
                    setSearchCharacter(e.target.value)} />
            </div>
               
                 <Table rows={Search(people)} nextPage={nextPg} prevPage={previousPg}/>  
                
                    {previousButton} {nextButton} 
        </div>
    )        
}

export default FetchPeople;

 