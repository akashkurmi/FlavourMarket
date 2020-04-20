import React,{ Component } from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './navbar.css'
import {connect} from 'react-redux';
class NavigationBar extends Component{
  state={
    UserName:null,
    PassWord:null
  }

  render(){
      console.log(this.props.cart+"-------------")
        return(
<div>
<Navbar bg="light" expand="sm"  sticky="top" id="NavBarEle">
  <Navbar.Brand href="#home" className="LinkEle">Flavor=Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    
    </Navbar.Collapse>
    {this.props.UserName?
     <div>
      <img src="https://i.dlpng.com/static/png/6758011_preview.png" alt="6758011_preview.png" width="40px" height="40px"></img>
      <p>{this.props.cart }</p>
      <br></br>
       {this.props.UserName }
       <Button variant="outline-danger" onClick={()=>this.props.User(this.state)}>LogOut</Button>
     </div>
     :
    <div>
    <Button variant="outline-info" onClick={this.props.Login}>Login</Button>
    <Button variant="outline-danger" onClick={this.props.SignUp}>SignUp</Button>
    </div>
    }     
 </Navbar>
   <Nav >
   <Nav.Link ><Link className="LinkEle" to="/">Shop</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/Recipes">Recipes</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/Blog">Blog</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/">WholeSale</Link></Nav.Link>
  
   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
   </NavDropdown>
 </Nav>
 </div>    )
    }
}
const StateHandler=(state)=>{
    // console.log("SteteHandler"+state.UserName)
  return{
    UserName:state.UserName,
    cart:state.cart
    // Password:state.PassWord
  }
}


const ActionHandler=(action)=>{
  return{
    User:(event)=>{
      action({type:event})
    }

  }
}
export default connect(StateHandler,ActionHandler)(NavigationBar);