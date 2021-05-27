import React from "react";
import {Link} from "react-router-dom";

function TableDataRow({ character }) {
    return (
        <tr className="charRowDetails">
            <td style = {{cursor:'pointer'}} onClick={displayModal}><u>{character.name}</u></td>
            <td>{character.birth_year}</td>
        </tr>
    );
      };

      const displayModal = props => {
          console.log("Props" + props)
        return (
          <div className="popup-box">
            <div className="box">
              <span className="close-icon" onClick={props.handleClose}>x</span>
              {props.content}
            </div>
          </div>
        );
}

export default TableDataRow;