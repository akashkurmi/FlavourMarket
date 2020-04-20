import React from 'react'
import './Backdrop.css';

const Backdrop =(props)=> (
    console.log("backdrop"+props.show),
     props.show ? <div className="Backdrop"></div>:null          
);
export default Backdrop;