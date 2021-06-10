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
    //const [searchData,setSearchData] = useState([]);

    let nextButton;
    let previousButton;

    useEffect(() => {
        async function fetchDataApi(){
            let response = await fetch('http://swapi.dev/api/people/?format=json');
            let data = await response.json();
            console.log(" Data fetched in FetchDataApi:" + data.results);
            setPeople(data.results);
            //setSearchData(data.results);
            setNextPg(data.next);
            setPreviousPg(data.previous);
            //searchTable();
        }
        fetchDataApi();
    }, [])

    function Search(rows)
    {
        return rows.filter(person => person.name.toLowerCase().indexOf(searchCharacter) > -1)
    }

   /* function searchTable()
    {
        let newData = [...searchData];
        newData.push(searchData);
        setSearchData(newData);
        console.log("New Search Data value length:"+newData.length);
        console.log(newData.map(e=>{
            console.log("New Search Data values:"+e.name);
        }))
    }*/

    const handleNextClick = () => {
        console.log("NextPg value:"+nextPg);
        if(nextPg!== ""){
            console.log("Inside return");
                async function currentTableData() {
                    let response = await fetch(nextPg);
                    let data = await response.json();
                    console.log("Next data fetched in currentTableData:"+data.results);
                    setPeople(data.results);
                    //setSearchData(data.results);
                    setNextPg(data.next);
                    setPreviousPg(data.previous);
                    //searchTable();
                }
                currentTableData();
                
        }
    }

    const handlePreviousClick = () => {
        console.log("PreviousPg value:"+previousPg);
        if(previousPg!== ""){
            console.log("Inside return");
                async function currentTableData() {
                    let response = await fetch(previousPg);
                    let data = await response.json();
                    console.log("Next data fetched in currentTableData:"+data.results);
                    setPeople(data.results);
                    //setSearchData(data.results);
                    setNextPg(data.next);
                    setPreviousPg(data.previous);
                    //searchTable();
                }
                currentTableData(); 
        }
    }

    if (nextPg !== null){
        console.log("Inside if condition nextPg value:"+nextPg);
        nextButton = <button className="nextBtn" onClick={ handleNextClick } data-tooltip = "Next Page" style={ {backgroundColor:"white", width:"50px", align:"center",cursor:"pointer",marginLeft:"200px"}}> <FcNext /> </button>
    }

    if (previousPg !== null){
        console.log("Inside if condition previousPg value:"+previousPg);
        previousButton = <button className="prevBtn" onClick={ handlePreviousClick } data-tooltip = "Previous Page" style={ {backgroundColor:"white", width:"50px", align:"center",cursor:"pointer",marginRight:"200px"}}> <FcPrevious /> </button>
    }

    return (
        <div className="table-data-container">
            <div className="searchBox">
                    <input type="text" placeholder="Search starwars character in this page" value={searchCharacter} onChange={(e)=>
                    setSearchCharacter(e.target.value)} />
                    {/* <FaSearch style={{display:"inline-flex",height:"20px",margin:"auto",size:"18px",paddingRight:"20px"}}/> */}
            </div>
                
                 <Table rows={Search(people)} nextPage={nextPg} prevPage={previousPg}/>  
                
                    {previousButton} {nextButton} 
        </div>
    )        
}

export default FetchPeople;

 