import React, { Component } from 'react';
import axios from 'axios';
import SideNavBar from '../UI_element/SideNavBar/SideNavBar';
class SideNav extends Component{
  state={
    Types:[]
  }

  componentDidMount(){
    axios.get("db.json").then(res=>{
      // console.log(res)
    this.setState({
      Types:[...new Set(res.data.posts.map(x=>x[this.props.Ele]))]
    })    
  });
  }


  render(){
return (
    <div>
      <p center>{this.props.Ele}</p>
      <SideNavBar Types={this.state.Types} Sid={this.props.Ele}></SideNavBar>     
    </div>
  );
}
}

export default SideNav;