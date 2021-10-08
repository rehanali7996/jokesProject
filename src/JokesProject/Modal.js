import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import "./styles.css";
import { FaHandHoldingHeart } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const [advice, setAdvice]= useState('');
      axios.get('https://api.adviceslip.com/advice')
      .then(Response =>{
        const {advice}=Response.data.slip;   //We are destructring the Response from api which is in the form
                                              // of Response.data.slip.advice. The object destructuring is a
                                            //useful JavaScript feature to extract properties from objects and 
                                            //bind them to variables.
        setAdvice(advice);
      })

      .catch(error =>{
          console.log(error);
      })
  
  return (
    <>
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton style={{backgroundColor:"whitesmoke"}}>
        <Modal.Title id="contained-modal-title-vcenter" className="special_modal">
         <h6>Okay..&nbsp;&nbsp;Is this inspiring enough ?</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="special_modal">
        <p>
            <b>{advice}</b>
        </p>
      </Modal.Body>
      <Modal.Footer className="special_modal">
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    <div className="text-center text-white p-3" style={{border:"1px solid #FFCC00;border-radius:10px",margin:"20px"}}>
            <p style={{fontFamily:"Spartan",fontSize:"18px"}}>Dev with <FaHandHoldingHeart/> Rehan</p>
    </div>
    </>
  );
}

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="w-50">
      <div className="d-grid gap-2">
        <Button variant="outline-warning" size="lg" className="modal_Button" onClick={() => setModalShow(true)}>
              <span>Inspire Me !!</span>
        </Button>
      </div>
     <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}