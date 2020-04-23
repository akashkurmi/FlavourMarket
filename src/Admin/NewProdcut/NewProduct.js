import React, { Component } from 'react';
import {Form,Button, Container} from 'react-bootstrap';
import "../Form.css"
class NewProduct extends Component {
   
    render() {
        return (
        <div >
            <Container className="FormClass"> 
            <h2>New Product</h2>
            <Form>
            
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter" />
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter" />
    <Form.Label>Type</Form.Label> 
    <Form.Control type="email" placeholder="Enter" />
    <Form.Label>MRP</Form.Label>
    <Form.Control type="number" placeholder="Enter" />
    <Form.Label>MFD</Form.Label>
    <Form.Control type="date" placeholder="Enter" />
    <Form.Label>Expirey</Form.Label>
    <Form.Control type="date" placeholder="Enter" />
    <Form.Label>LOT</Form.Label>
    <Form.Control type="text" placeholder="Enter" />
    <Form.Label>Avalibilty</Form.Label>
    <Form.Control type="date" placeholder="Enter" />
    <Form.Label>Discount</Form.Label>
    <Form.Control type="number" placeholder="Enter" />
    
    
    {/* <Form.Text className="text-muted">
    </Form.Text> */}

  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
</Container>
        </div>         
        )
    }
}

export default NewProduct