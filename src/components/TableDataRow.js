import React from "react";

function TableDataRow({ character }) {
    return (
        <tr className="charRowDetails">
            <td>{character.name}</td>
            <td>{character.birth_year}</td>
            <td>More Info</td>
        </tr>
    );
}

export default TableDataRow;