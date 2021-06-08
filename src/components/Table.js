import React, {useState,useEffect} from "react";
import TableHeader from "./TableHeader";
import TableDataRow from "./TableDataRow";
import ReactPaginate from 'react-paginate';
import FetchPeople from "./FetchPeople";

 function Table({ rows, nextPage, prevPage }) {
    
     console.log("rows value in Table:"+rows);
     console.log("Next value in Table:"+nextPage);
     console.log("Prev value in Table:"+prevPage);
     const [pageNum,setPageNum] = useState(0);
     const [urlPage,seturlPage] = useState("");
     //const [ tableData, setTableData] = useState(rows);

       // let urlNext= nextPage;
       // let urlPrev = "";
    
        

        /* const handleClick = () => {
            seturlPage(nextPage);
            console.log("inside handle click");
            console.log("urlPage state value:"+urlPage);
            if(nextPage!== ""){
                console.log("Inside return");
            
                    // <FetchPeople url={urlPage} />
                    async function currentTableData() {
                        let response = await fetch(urlPage);
                        let data = await response.json();
                        console.log("Next data fetched in currentTableData:"+data.results);
                        setTableData(data.results);
                        seturlPage(data.next);
                    }
                    currentTableData();
            
            }
        } */
       /* const changePage = (urlNext) => {
            console.log("Next clicked in ChangePage:"+urlNext);
            seturlPage(urlNext);
            <FetchPeople url={urlPage} />
            
        }*/
     
       /*  const changePage = ({selected}) => {
             setPageNum(selected);
             console.log("pagenum:"+selected);
             {
                 
                /* rows.map((p,i)=>{
                     urlNext = p.next;

                     console.log("p value:"+p);
                     console.log("url for Next:" + urlNext);
                 })
                }*/
        /*let response = await  fetch(url);
        let data = await response.json();
        console.log("Next data fetched:"+data);
     } */

    /* async function changePage ({page}) {        
        seturlPage(page);
        console.log("pageurl:"+urlPage);
        {
            let response = await  fetch(urlPage);
            let data = await response.json();
            console.log("Next data fetched:"+data)   
        }
   /*let response = await  fetch(url);
   let data = await response.json();
   console.log("Next data fetched:"+data);
}*/

     
     
    return (
        <div>
            <table cellPadding={0} cellSpacing={0}
                    style={{ width: "80%", padding: 10, marginTop: 50, marginLeft:"auto", marginRight:"auto", borderCollapse:"separate", borderSpacing: 15}}>
                <TableHeader />
                <tbody>
                    {rows.map(person => <TableDataRow character={person} key={person.name} />)}
                </tbody>
            </table>
            
                    {/* <div>
                        <button onClick={ handleClick }> Next </button>
                    </div> */}
            
           

           {/*  <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                onPageChange={changePage}
                // containerClassName={"paginationBtns"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                /* disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}  /> */}
        </div>
    );
}

export default Table;
