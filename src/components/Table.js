import React, {useState,useEffect} from "react";
import TableHeader from "./TableHeader";
import TableDataRow from "./TableDataRow";
import ReactPaginate from 'react-paginate';
import FetchPeople from "./FetchPeople";
import '../css/tableCSS.css';


 function Table({ rows, nextPage, prevPage }) {
        
    return (
        <div>
            <table className="displayTable" cellPadding={0} cellSpacing={0}>
                <TableHeader />
                <tbody>
                     {rows.map(person => <TableDataRow character={person} key={person.name} />)} 
                </tbody>
            </table>
        </div>
    );
}

export default Table;
