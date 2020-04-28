import React,{ Component } from 'react';
import {Row,Col,Button,Card} from 'react-bootstrap';
import './ItemDiv.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


class ItemDiv extends Component {
    cartHandler=()=>{
      console.log("clicked");  
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Row>
                    {this.props.itemsdetail.map(p=>{
                        return(<div>
                        {/* // <Link className="Link" to={"/FullPage/"+p.id} key={p.id}> */}
                            <Col  className="column" sm={4} >
                                {/* <div className="division">
                                    <div className="Image"><img src={"/images/"+p.source} width="100%" height="100%"></img>
                                    </div>
                                    <span className="ProductTitle">{p.Product}</span>
                                    
                                    <h5>{p.MRP}$</h5>
                                  </div> */}
                                  <Card className="CardDiv" style={{width:'18rem'}}>
            <Card.Img className="ImageDiv" variant="top" src={"/images/"+p.source} />
            <Card.Body>
              <Card.Title style={{height:"10px"}}>
                <Link className="Link" to={"/FullPage/"+p.id} key={p.id}>
                {p.Product}
                <p className="MRP">{p.MRP}$</p>
                <p className="CardText">{p.Type}</p>
                </Link>
                {/* <p className="CardText">{p.Discount}</p> */}
                </Card.Title>
              <Card.Text>
             
               </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div className="Button"><Button className="btn btn-dark" onClick={this.cartHandler}> Add to cart </Button></div>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          
                            </Col>
                            {/* // </Link> */}
                            </div>
                        )
                    })}
                    
                </Row>
 
            </div>
        )

}
}

export default connect()(ItemDiv);