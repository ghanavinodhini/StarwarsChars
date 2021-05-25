import React from "react";
import TableHeader from "./TableHeader";

 function Table({ rows }) {
    return (
        <div>
            <table
                style={{ width: "80%", padding: 10, marginTop: 15 }}>
                <TableHeader />
                
                <tbody>{rows}</tbody>
             
               
            </table>
        </div>
    );
}

export default Table;
