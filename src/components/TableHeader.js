import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr className="table-header" style={{ color: "black" }}>
                <th>Name</th>
                <th>Birthdate</th>
            </tr>
        </thead>
    );
}

export default TableHeader;