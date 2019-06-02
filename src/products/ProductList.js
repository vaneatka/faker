import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import faker from 'faker';

class ProductList extends Component{
     
 
//   method care returneaza o lista de produse
// 

getProducts(){
    // class Products
    // bonus npm-> faker   generate products()
    let m = new Products();
    return (
      m
    )
}
    render(){
      let rows = []
      for(let i = 0 ; i<5 ; i++){
        let prod = this.getProducts()
        var row = [];
        row.push(<td> <img src={prod.photo} alt="img" height="250px"/> </td>);
        row.push( <td>{prod.name} </td>);
        row.push( <td>{prod.price.amount} {prod.price.currency} </td>);
        row.push( <td>{prod.rating} </td>);
        rows.push(<tr key={i}> {row} </tr>);          
      }

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

          {rows}

  </tbody>
</Table>
                
            </div>
        )
    }
}

export default ProductList;

class Products{
  constructor(){
  this.photo= faker.image.technics();
  this.name= faker.commerce.productName();
  this.price={
    amount:faker.commerce.price(),
    currency:"USD"
      };
  this.rating= 4.5;
  this.promo= true;
  }
}