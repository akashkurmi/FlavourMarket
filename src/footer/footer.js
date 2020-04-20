import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const Footer = () => {
  return (
  <div className="footer">
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h4>SIgn Up for our Newsletter</h4>
            <br/>
            <h6>Get news about upcoming deals, new spices and great recepies</h6>
            <br/>
            <form>
              <input type="email" name="nlemail" placeholder="Enter Your Email"></input>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="submit" value="Enter" name="submit"></input>
            </form>
            <hr/>
            <h4>Find Us On:-</h4><br/>
            &nbsp;&nbsp;<a href="#"><img src="/Images/insta.png" height="35" width ="35"></img></a>&nbsp;&nbsp;
            &nbsp;&nbsp;<a href="#"><img src="/Images/fb.png" height="35" width ="35"></img></a>&nbsp;&nbsp;
            &nbsp;&nbsp;<a href="#"><img src="/Images/yt.png" height="35" width ="35"></img></a>&nbsp;&nbsp;
            <br/>
          </MDBCol>
          <MDBCol md="4">
            <h4>About Flavour Market</h4>
            <br/>
            <h6><a href="#">Why Us?</a></h6>
            <br/>
            <h6><a href="#">FAQ</a></h6>
            <br/>
            <h6><a href="#">Terms of Use</a></h6>
            <br/>
            <h6><a href="#">Privacy Policy</a></h6>
            <br/>
            <h6><a href="#">Refund Policy</a></h6>
            <br/>
          </MDBCol>
          <MDBCol md="4">
            <h4>Contact Us</h4>
            <br/>
            <h6>Email us at flavourmarket@gmail.com</h6>
            <br/>
            <h6>Call us at +91-9999999999</h6>
            <br/>
            <h6>Reach our store at aaaa, aaaa, Dehradun,India</h6>
            <br/>
            <h6>Open: 09:00 IST</h6>
            <h6>Closes: 20:00 IST</h6>
            <br/>
            <h6>Store Locator at Google Map:
            <br/>
            </h6>
          </MDBCol>
        </MDBRow>
        <br/>
        <h4>Spices for Seasoning</h4>
        <br/>
        <MDBRow>
          <MDBCol md="3">
            <ul>
              <li>Cloves</li>
              <li>Coriender</li>
              <li>Cardamom</li>
              <li>Dry Ginger</li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li>Turmeric</li>
              <li>Black Paper</li>
              <li>Cumin Seeds</li>
              <li>Fexed Seeds</li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
        </MDBRow>
        <h4>Mixed Spices</h4>
        <br/>
        <MDBRow>
          <MDBCol md="3">
            <ul>
              <li>Chana Masala</li>
              <li>Patties Masala</li>
              <li>Garam Masala</li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
        </MDBRow>
        <h4>Dry Fruits</h4>
        <br/>
        <MDBRow>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
        </MDBRow>
        <h4>Others</h4>
        <br/>
        <MDBRow>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
        </MDBRow>  
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;