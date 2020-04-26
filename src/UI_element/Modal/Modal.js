import React from 'react'
import './Modal.css';
import { Modal } from 'react-bootstrap';

const ModalUI=(props)=>{
    return (
    <div>
    <Modal style={{border:"none"}} show={props.show} onHide={props.modalClose} >
            {/* <Backdrop show={props.show}></Backdrop>   */}
           
            <div className="Modal" >
             <Modal.Header style={{border:"none",alignItems:""}} closeButton><img src="https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png" width="50px" height="50px"></img></Modal.Header>
                     {/* <Button variant="danger" onClick={props.modelClose} >X</Button> */}
                     {/* <hr></hr> */}
      
                {props.children}
            </div>
            </Modal>
            </div>
        )
    }

export default ModalUI;