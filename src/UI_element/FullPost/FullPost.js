import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import {connect} from 'react-redux'
class FullPost extends Component {
   state={
       post:{},
       cart:{
           prouductId:null,
           prouductName:null,
           UserId:null
       }
       
   }

   cartHandler=()=>{
       this.props.Action();
    //      var cart={
    //            productId:this.state.post.id,
    //             prouductName:this.state.post.Product,
    //              UserId:this.props.UserName
    //        }
    //    if(cart)
    //    axios.post("http://localhost:3001/cart",cart).then(res=>{console.log("CART ADDED")});
   }

   BuyHandler=()=>{

   }

    componentDidMount=()=>{
        axios.get("http://localhost:3001/posts/"+this.props.match.params.id).then(response=>{
            console.log(response);    
            this.setState({
                post:response.data
            })
        })
    }
    render() {
        console.log(this.state.post);
        return (
            <div>
                <Container>
                    <Row>
                    <Col sm={6}>
                            <h1>this is 1st block</h1>
                            <img src={"/images/"+this.state.post.source } alt={this.state.post.source} width="300px" height="300px"></img>
                        </Col>
                        <Col sm={6}>
                        <h1>{this.state.post.Product}</h1>
                        <h2>{this.state.post.id}</h2>
                        <h2>{this.state.post.weight}</h2>
                        <h2>{this.state.post.MRP}</h2>
                        <h2>{this.state.post.Type}</h2>
                        </Col>
                        <Button className="btn btn-success" onClick={this.cartHandler}>Add to cart</Button>
                        <Button className="btn btn-dark" onClick={this.BuyHandler}>Buy now</Button>
                    </Row>
                </Container>

            </div>
        )
    }
}

const stateHandler=(state)=>{
    return{
        UserName:state.UserName

    }
}

const ActionHandler=(action)=>{
    return{
        Action:()=>{
            action({type:'INCREMENT'})
        }
    }
}
export default connect(stateHandler,ActionHandler)(FullPost)