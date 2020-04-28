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
        axios.get("http://localhost:3001/posts").then(response=>{
            // console.log(this.props.match.params.id)
            // console.log(response.data.find(r=>r.id===parseInt(this.props.match.params.id)));    
            this.setState({
                post:response.data.find(r=>r.id===parseInt(this.props.match.params.id))
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
                        {/* <h1>{this.state.post.Product}</h1>
                        <h2>{this.state.post.id}</h2>
                        <h2>{this.state.post.weight}</h2>
                        <h2>{this.state.post.MRP}</h2>
                        <h2>{this.state.post.Type}</h2> */}

<h1>{this.state.post.Product}</h1>
                            <h6>Type - {this.state.post.Type}</h6>
                            <h6>{this.state.post.Avalibilty}</h6>
                            <table>
                                <tr height="40px">
                                    <td>{this.state.post.weight}gm - Rs. {this.state.post.MRP  }</td>
                                    <td>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="size"placeholder="1" min="1" max="8"></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=""><img src="/Images/cart.png" alt="" height="20px" width="20px"></img> &nbsp;Add to cart</button></td>
                                </tr>
                                <tr height="40px">
                                    <td>{2*this.state.post.weight}gm - Rs. {2*0.95*this.state.post.MRP  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="size"placeholder="1" min="1" max="8"></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=""><img src="/Images/cart.png" alt="" height="20px" width="20px"></img> &nbsp;Add to cart</button></td>
                                </tr>
                                <tr height="40px">
                                    <td>{4*this.state.post.weight}gm - Rs. {4*0.95*this.state.post.MRP  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="size"placeholder="1" min="1" max="8"></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=""><img src="/Images/cart.png" alt="" height="20px" width="20px"></img> &nbsp;Add to cart</button></td>
                                </tr>
                                <tr height="40px">
                                    <td>{10*this.state.post.weight}gm - Rs. {10*0.95*this.state.post.MRP  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="size"placeholder="1" min="1" max="8"></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=""><img src="/Images/cart.png" alt="" height="20px" width="20px"></img> &nbsp;Add to cart</button></td>
                                </tr>
                                <tr height="40px">
                                    <td>{20*this.state.post.weight}gm - Rs. {20*0.95*this.state.post.MRP  }&nbsp;&nbsp;&nbsp;</td>
                                    <td>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="size"placeholder="1" min="1" max="8"></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=""><img src="/Images/cart.png" alt="" height="20px" width="20px"></img> &nbsp;Add to cart</button></td>
                                </tr>
                            </table>
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