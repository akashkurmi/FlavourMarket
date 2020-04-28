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

<html>
            <head>
              <title>

              </title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
          <body>
          <div>
<Navbar bg="light" expand="sm"  sticky="top" id="NavBarEle">
  <Navbar.Brand href="#home" className="LinkEle"><img src='./images/LOGO.png' alt=""  height="50%" width="50%" ></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <pre>                    </pre>
    <Form inline>
    <FormControl type="text" id="searchbox" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" id="searchbutton"><i class="fa fa-search"></i>  </Button> 
    </Form>

    <pre>                       </pre>
    <Link to="/Checkout">
    <img src="images/cart.png" alt="6758011_preview.png" width="40px" height="40px"></img>
      <p style={{backgroundColor:"red", color:"white",borderRadius:"30%"}}>{this.props.cart }</p>
      </Link>
    </Navbar.Collapse>
    {this.props.UserName?
     <div>
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
 </div> 
 
 </body>
 </html>   )
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