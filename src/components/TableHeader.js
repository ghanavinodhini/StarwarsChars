import React from "react";
import '../css/tableCSS.css';

function TableHeader() {
    return (
        <thead>
            <tr className="table-header" style={{ color: "yellow" }}>
                <th><h3>CHARACTERS</h3></th>
            </tr>
        </thead>
    );
}

export default TableHeader;