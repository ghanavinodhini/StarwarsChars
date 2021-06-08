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
        
    return (
        <div>
            <table cellPadding={0} cellSpacing={0}
                    style={{ width: "fit-content", padding: 10, marginTop: 50, marginLeft:"auto", marginRight:"auto", borderCollapse:"separate", borderSpacing: 15}}>
                <TableHeader />
                <tbody>
                    {rows.map(person => <TableDataRow character={person} key={person.name} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
