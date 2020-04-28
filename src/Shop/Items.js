import React, { Component } from 'react';
import axios from 'axios';
import ItemDiv from './ItemDiv';
import {Row} from 'react-bootstrap';
class Items extends Component {
    state={
        posts:[],
        filterPost:[]
    }
    componentDidMount(){
        // console.log("once")
        axios.get("http://localhost:3001/posts").then(res=>{
        this.setState({
            posts:res.data,
           
        })    
    })  
    }
    
    // componentDidUpdate=()=>{
    //   var fp
    //     if(this.props.match.params.id){
    //      fp= this.state.posts.filter((post)=>{return post.Type===this.props.match.params.id}) 
    //       this.setState({
    //           filterPost:fp
    //       })
    //     }
    // }
    render() {
        // console.log(this.props.match.params.id);
      
        return (
            <div>
                <h1>shop element :{this.props.match.params.id } </h1>
                {/* {this.state.posts.map(p=>{
                    return(
                        <div>
                            <h3>{p.id}</h3>
                            <h3>{p.title}</h3>
                            <h3>{p.mrp}</h3>
                            <img src={'src/Images/'+p.src}></img> 
                        </div>
                    )
                })} */}
                <Row>
                <ItemDiv itemsdetail={this.props.match.params.id ? this.state.posts.filter((post)=>{return post[this.props.match.params.Sid]===this.props.match.params.id}):this.state.posts}></ItemDiv>
                </Row>
            </div>

        )
    }
}

export default Items