import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./SideNavBar.css";
class SideNavBar extends Component {


    render() {
        return (
        <div >
        <Nav vertical  >
            <NavItem>
              {this.props.Types.map(ele=>{
                return(
                <NavLink  className="NavLink" key={ele}><Link className="InsideLink" to={"/items/"+ele+"/"+this.props.Sid} value="Link">{ele}</Link></NavLink>
                )})}
            </NavItem>
          </Nav>
          {/* <hr /> */}
          {/* <p>Link based</p>
          <Nav vertical>
        <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
              </NavItem>
          </Nav>   */}
          </div>
        )
    }
}

export default SideNavBar