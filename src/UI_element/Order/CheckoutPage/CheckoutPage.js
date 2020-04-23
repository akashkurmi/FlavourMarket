import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import '../Checkout.css'

class CheckoutPage extends Component {
  
    render() {
        return (
            <div className="Checkout">
                <Table responsive >
  <thead>
    <tr className="thead">
      <th >Item</th>
      <th >Description</th>
      <th >Weight</th>
      <th >Price</th>
      <th >Quantity</th>
      <th >Total</th>
      <th >X</th>
    </tr>
  </thead>
  <tbody>
    <tr className="tablerow">
      <td className="id"></td>
      <td className="desc">Cinnamon Sticks(Cassia-Dalchini)</td>
      <td className="weight">100 gm</td>
      <td className="price">Rs 65</td>
      <td className="qty">1</td>
      <td className="total">Rs 65</td>
      <td classname="cross">X</td>
    </tr>
    <tr>
      <td></td>
      <td>Dried Black Grape (Raisins)</td>
      <td>150 gm</td>
      <td>Rs 50</td>
      <td>1</td>
      <td>Rs 50</td>
      <td>X</td>
    </tr>
   
  </tbody>
</Table>
            </div>          
        )
    }
}

export default CheckoutPage