import React, {Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./UserLoginAndSignUp.css"
import axios from 'axios'

class UserSignUp extends Component {
 state={
   name:null,
   email:null,
   password:null
 }

 UpdateDetail=(event)=>{
  this.setState({
    [event.target.name]:event.target.value
  })
}

signUpSubmit=()=>{

    axios.post("http://localhost:3001/user",this.state).then(res=>{console.log(res)})
}

    render() {
      // console.log(this.state)
        return (
            <div className="LoginPage"> 
        <Form >
            <h3 style={{textAlign:"center"}}>Sign Up</h3>
            <Form.Group controlId="formBasicEmail1">
    <Form.Label className="label">Full Name</Form.Label>
    <Form.Control className="InputBox" name="name" type="text" placeholder="full name"  onChange={this.UpdateDetail}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword1">
    <Form.Label>Email</Form.Label>
    <Form.Control className="InputBox" name="email" type="email" placeholder="Password" onChange={this.UpdateDetail} />
  </Form.Group>
 
  <Form.Group controlId="formBasicEmail2">
    <Form.Label className="label">Password</Form.Label>
    <Form.Control className="InputBox"  name="password" type="password" placeholder="Enter email" onChange={this.UpdateDetail} />
    </Form.Group>

  <Form.Group controlId="formBasicPassword2">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control className="InputBox" type="password" placeholder="Password" onChange={this.UpdateDetail} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox1">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="SubmitBtn" variant="outline-primary" type="button" onClick={this.signUpSubmit}>
    Submit
  </Button>
</Form>            
            </div>
        )
    }
}

export default UserSignUp