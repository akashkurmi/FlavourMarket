import React, {Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./UserLoginAndSignUp.css"

class UserSignUp extends Component {
 
    render() {
        return (
            <div className="LoginPage"> 
        <Form >
            <h3 style={{textAlign:"center"}}>Sign Up</h3>
            <Form.Group controlId="formBasicEmail1">
    <Form.Label className="label">Full Name</Form.Label>
    <Form.Control className="InputBox" type="text" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword1">
    <Form.Label>Email</Form.Label>
    <Form.Control className="InputBox" type="email" placeholder="Password" />
  </Form.Group>
 
  <Form.Group controlId="formBasicEmail2">
    <Form.Label className="label">Password</Form.Label>
    <Form.Control className="InputBox" type="password" placeholder="Enter email" />
    </Form.Group>

  <Form.Group controlId="formBasicPassword2">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control className="InputBox" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox1">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="SubmitBtn" variant="outline-primary" type="submit">
    Submit
  </Button>
</Form>            
            </div>
        )
    }
}

export default UserSignUp