import React,{useState} from "react";
import {Link} from "react-router-dom";
//import Modal from '../components/Modal';
import Modal from 'react-modal';

function TableDataRow({ character }) {
  const [modalIsOpen,setmodalIsOpen] = useState(false)
    return (
        <tr className="charRowDetails">
            <td style = {{cursor:'pointer'}} onClick={() => setmodalIsOpen(true)
              }><u>{character.name}</u></td>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
                <h2>{character.name}</h2>
                <p>{character.birth_year}</p>
                <div>
                  <button onClick={() => setmodalIsOpen(false)}>X</button>
                  </div>
              </Modal>
            <td>{character.birth_year}</td>
        </tr>
    );
      };

      const displayModal = (props) => {
       
        console.log("Inside displayModal" + this.props);
       /* return (
          <div className="popup-box">
            <div className="box">
              <span className="close-icon" onClick={props.handleClose}>x</span>
              {props.content}
            </div>
          </div>
        );*/
        
}

export default TableDataRow;