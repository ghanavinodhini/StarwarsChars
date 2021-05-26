import React from "react";
import TableHeader from "./TableHeader";
import TableDataRow from "./TableDataRow";

 function Table({ rows }) {
     const columns = rows[0] && Object.keys(rows[0]);
    return (
        <div>
            <table cellPadding={0} cellSpacing={0}
                    style={{ width: "80%", padding: 10, marginTop: 15 }}>
                <TableHeader />
                <tbody>
                    {rows.map(person => <TableDataRow character={person} key={person.name} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
