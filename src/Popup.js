import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Popup({ handleDeleteTrue, handleDeleteFalse }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
      <div className="modal">
       
       < Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={SVGFEDropShadowElement} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> You sure you wanna delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteFalse}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDeleteTrue}>
           confirm delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  

export default Popup;