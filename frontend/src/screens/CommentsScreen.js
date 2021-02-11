import React, { useState } from 'react';
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import { Modal } from 'react-bootstrap';

const CommentsScreen = ({Modalshow, handleClose}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    return (
        <>
      
  
        <Modal show={Modalshow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Discussion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <p> <strong> Marou1 </strong>: B and C are correct</p>
             <p>    Wolf2 : Why is C correct ?</p>
             <p>   Marou1 : check this link</p>
             <p>  Wolf1 : tested </p>
              
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default CommentsScreen;