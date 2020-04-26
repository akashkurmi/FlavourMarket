import React, { Component, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import SideNav from '../SideNav/sidenav'
import CarouselEle from '../UI_element/Carousel/CarouselEle'
import { Suspense } from 'react'
import Loading from '../UI_element/Loading/Loading'



const FullPost=lazy( ()=>import( '../UI_element/FullPost/FullPost'));
const Items =lazy(()=>import('./Items'))

class Shop extends Component {
  
    render() {
        return (
        <div>
            
      <Row>
        <Col > 
        <CarouselEle></CarouselEle>
        </Col>
      </Row>
    
          <Row className="Row">
          <Col className="SideNav" sm={2}>
         <SideNav Ele="Type"></SideNav> 
         <SideNav Ele="MRP"></SideNav>
       </Col>
            <Col className="blurBackground">
              <Suspense fallback={<Loading></Loading>}>
            <Switch>
            <Route path="/items/:id/:Sid" component={Items} ></Route>
             <Route path="/FullPage/:id" component={FullPost}></Route>
            <Route path="/" component={Items} ></Route>   
         
            </Switch>
            </Suspense>
            </Col>
            </Row>
        </div>          
        )
    }
}

export default Shop