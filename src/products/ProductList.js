import React, { Component } from 'react';
import {Form, Button, Table} from 'react-bootstrap';


class ProductList extends Component{
     
//   method care returneaza o lista de produse
// 

getProducts(){
    // class Products
    // bonus npm-> faker   generate products()
    return ([{
        photo: "./images/p1.jph",
        name: 'iofone',
        price:{
            amount:100,
            currency:"USD"
        },
        rating: 4.5,
        promo: true
    }])
}


    render(){
        return(
            <div className="container md-3">
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>Photo</th>
      <th>Name</th>
      <th>Price</th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>


      {/* ciclu de afisare a produsului */}
    <tr>
      <td>1</td> 
      {/* if promo - sa se evidentieze */}
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
                
            </div>
        )
    }
}

export default ProductList;