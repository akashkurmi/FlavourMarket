import React from 'react'
import './Modal.css';
import { Modal } from 'react-bootstrap';

const ModalUI=(props)=>{
    return (
    <div>
    <Modal style={{border:"none"}} show={props.show} onHide={props.modalClose} closeButton>
            {/* <Backdrop show={props.show}></Backdrop>   */}
           
            <div className="Modal" closeButton>
             <Modal.Header closeButton></Modal.Header>
                     {/* <Button variant="danger" onClick={props.modelClose} >X</Button> */}
                     {/* <hr></hr> */}
      
                {props.children}
            </div>
            </Modal>
            </div>
        )
    }

export default ModalUI;