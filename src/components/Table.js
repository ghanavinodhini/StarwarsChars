import React, {useState} from "react";
import TableHeader from "./TableHeader";
import TableDataRow from "./TableDataRow";
import ReactPaginate from 'react-paginate';

 function Table({ rows }) {
     const columns = rows[0] && Object.keys(rows[0]);
     const [pageNum,setPageNum] = useState(0);
        let url = rows.next;
        console.log("url for Next:" + url);
     
        const async changePage = ({selected}) => {
        setPageNum(selected);
        let response = await  fetch(url);
        let data = await response.json();
        console.log("Next data fetched:"+data);
     }
     
    return (
        <div>
            <table cellPadding={0} cellSpacing={0}
                    style={{ width: "80%", padding: 10, marginTop: 50, marginLeft:"auto", marginRight:"auto", borderCollapse:"separate", borderSpacing: 15}}>
                <TableHeader />
                <tbody>
                    {rows.map(person => <TableDataRow character={person} key={person.name} />)}
                </tbody>
            </table>

            <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"} />
        </div>
    );
}

export default Table;
