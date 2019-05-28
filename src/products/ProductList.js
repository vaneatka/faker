import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import faker from 'faker';

class ProductList extends Component{
     
 
//   method care returneaza o lista de produse
// 

// getProducts(){
//     // class Products
//     // bonus npm-> faker   generate products()
//     return ([{
//         photo: "./images/p1.jph",
//         name: 'iofone',
//         price:{
//             amount:100,
//             currency:"USD"
//         },
//         rating: 4.5,
//         promo: true
//     }])
// }

genProduct(){
  let {product} = this.state;
  product.push(
    {
      photo: faker.image.technics(),
      name: faker.commerce.productName(),
      price: {
        amount: "faker.commerce.price()",
        currency: "USD"
      },
      rating: faker.random.number(),
      promo: false
    }
  )
  this.setState({product});
  console.log(this.state);
}
 


    render(){
      
      for(let i = 0 ; i<5 ; i++){
        this.genProduct()
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
          <tr>
            <td>{this.state.product[0].name}</td>
          </tr>
 
     
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
  this.rating; 4.5;
  this.promo; true;
  }
}