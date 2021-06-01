import React,{useState} from "react";
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import '../css/modalCSS.css';;

function TableDataRow({ character }) {
  const [modalIsOpen,setmodalIsOpen] = useState(false)
    return (
        <tr className="charRowDetails">
            <td style = {{cursor:'pointer'}} onClick={() => setmodalIsOpen(true)
              }><u>{character.name}</u></td>

            <Modal className="modal-dialog" centered isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
                <div className="modal-content">
                  <div className="m-Header">
                    <h2 className="modalHeader">{character.name}</h2>
                    <span> <button className="closeBtn" onClick={() => setmodalIsOpen(false)}>X</button> </span>
                  </div>
                
                  <div className="m-Body">
                    <p className="modalBirth">Birth Year: {character.birth_year}</p>
                    <p className="modalGender">Gender: {character.gender}</p>
                    <p className="modalHeight">Height: {character.height}</p>
                    <p className="modalSkinColor">Skin Color: {character.skin_color}</p>
                    <p className="modalHairColor">Hair Color: {character.hair_color}</p>
                    <p className="modalEyeColor">Eye Color: {character.eye_color}</p>
                  </div>
                </div>
              </Modal>
        </tr>
    );
      };

      
        


export default TableDataRow;