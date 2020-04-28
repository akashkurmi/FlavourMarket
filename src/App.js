import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import  NavigationBar from './NavBar/navbar'
import {Row,Col,Container} from 'react-bootstrap';
import {Route,Switch} from 'react-router-dom';
import Footer from './footer/footer';
import Modal from './UI_element/Modal/Modal';
import AUI from './UI_element/AUI/AUI';
import {connect} from 'react-redux'
import Loading from './UI_element/Loading/Loading';

// import CarouselEle from './UI_element/Carousel/CarouselEle';
// import SideNav from './SideNav/sidenav';
// import CheckoutPage from './UI_element/Order/CheckoutPage/CheckoutPage';
// import Items from './Shop/Items';
// import Shop from './Shop/Shop';
// import Recipes from './Recipes/Recipes'; 
// import UserLogin from './Login_And_SignUp/UserLogin';
// import UserSignUp from './Login_And_SignUp/UserSignUp';

const Shop =lazy(()=>import('./Shop/Shop'));
const UserLogin = lazy(()=>import( './Login_And_SignUp/UserLogin'))
const UserSignUp = lazy(()=>import( './Login_And_SignUp/UserSignUp'))
const CheckoutPage=lazy(()=>import('./UI_element/Order/CheckoutPage/CheckoutPage'))
const Blog=lazy( ()=>import( './Blog/blog'));
const Admin=lazy( ()=>import( './Admin/admin'));
const NewProduct=lazy( ()=>import( './Admin/NewProdcut/NewProduct'));
const Recipes=lazy(()=>import('./Recipes/Recipes'))

class App extends Component {
  state={
    Login:false,
    SignUp:false,
    path:null
  }
  
  LoginHandler=()=>{
 
    this.setState({
      Login:true,
      SignUp:false
    })
  }

  SignUpHandler=()=>{
 
    this.setState({
      SignUp:true,
      Login:false
    })
  }

  LoginCancelHandler=()=>{
    this.setState({
      Login:false,
      SignUp:false
    })
  }


  render(){
  return (
    <div className="App">
      <Container  >

      <Container>
      <NavigationBar Login={this.LoginHandler} SignUp={this.SignUpHandler}></NavigationBar>
      </Container>

      <AUI flag={this.props.UserName} >
     
      <Modal show={this.state.Login} modalClose={this.LoginCancelHandler} >
      <Suspense fallback={<div>Loading...</div>}>
      <UserLogin></UserLogin>
      </Suspense>
      </Modal>
      </AUI>
      <AUI flag={this.props.UserName}>
      <Modal show={this.state.SignUp} modalClose={this.LoginCancelHandler} top="10%" >
        <Suspense fallback={<div>Loading...</div>}>
        <UserSignUp></UserSignUp>
        </Suspense>
      </Modal>
      </AUI>      

      {/* <Row>
        <Col className="Gape"> 
        <CarouselEle></CarouselEle>
        </Col>
      </Row>
    
     <Row className="Row">
      <Col className="SideNav" sm={2}>
        <SideNav Ele="Type"></SideNav>
        <SideNav Ele="MRP"></SideNav>
      </Col>

      <Col className="G"> */}
         <Suspense fallback={<div><Loading></Loading></div>}>
         <Switch>
         {/* <Route path="/items/:id/:Sid" component={Items} ></Route> */}
         {/* <Route path="/FullPage/:id" component={FullPost}></Route> */}
         <Route path="/Blog" component={Blog}></Route>
         {/* <Route path="/Recipes" render={()=>(<Suspense fallback={<div>Loading...</div>}><Recipes></Recipes></Suspense>)}></Route> */}
         <Route path="/Recipes" component={Recipes}></Route>
         <Route path="/FMadmin/login" component={Admin}></Route>
       <Route path="/FMadmin/NewProduct" component={NewProduct}></Route>
       <Route path="/Checkout" component={CheckoutPage}></Route>
         <Route path="/" component={Shop}></Route>
         
        </Switch>
        </Suspense>
       
      {/* </Col>
  </Row> */}
  
  <Row>
    <Col>
      <Footer></Footer>
    </Col>
  </Row>
</Container>
    </div>
  );
}
}

const StateHandler=(state)=>{
  // console.log("SteteHandler"+state.UserName)
return{
  UserName:state.UserName
  // Password:state.PassWord
}
}

export default connect(StateHandler)(App);
