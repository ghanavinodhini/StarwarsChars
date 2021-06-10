import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr className="table-header" style={{ color: `var(--text-color)` }}>
                <th><h3>CHARACTERS</h3></th>
            </tr>
        </thead>
    );
}

export default TableHeader;