import React, {Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./UserLoginAndSignUp.css";
import {connect} from 'react-redux';

class UserLogin extends Component {
   state={
     UName:null,
     PWord:null
   }

   UpdateDetail=(event)=>{
     this.setState({
       [event.target.name]:event.target.value
     })
   }

  LoginDetailHandler=()=>{
      console.log("check detail************************");
    }
 
    render() {
        return (
            <div className="LoginPage"> 
        <Form >
            <h3 style={{textAlign:"center"}}>Login</h3>
        <Form.Group controlId="formBasicEmail">
    <Form.Label className="label">Email address</Form.Label>
    <Form.Control className="InputBox" type="email" placeholder="Enter email" name="UName" onChange={this.UpdateDetail} />
    <Form.Text >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="InputBox" type="password" placeholder="Password" name="PWord" onChange={this.UpdateDetail}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="SubmitBtn" variant="outline-primary" type="button" onClick={()=>this.props.User(this.state)}>
    Submit
  </Button>
</Form>            
            </div>
        )
    }
}

const StateHandler=(state)=>{
  return{
    UserName:state.UserName,
    Password:state.PassWord
  }
}

const ActionHandler=(action)=>{
  return{
    User:(event)=>{
      action({type:event})
    }

  }
}

export default connect(StateHandler,ActionHandler)(UserLogin)