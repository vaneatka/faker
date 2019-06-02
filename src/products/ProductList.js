import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import faker from 'faker';
import Product from './Product'


class ProductList extends Component{
     
 
//   method care returneaza o lista de produse
// 

getProducts(){  
    
    let products = [];
    faker.locale="ru"
    while(products.length<10){
      products.push ({
    photo: faker.image.technics(100,100, true),    
    name: faker.commerce.productName(500, 5000),
    price:{
      amount:faker.commerce.price(),
      currency:"USD"
        },
    rating: (Math.random()*5).toFixed(1),
    promo: true    
  })}
  return products
}

    render(){

      let data = this.getProducts();
      let list = [];

      for (var i = 0; i< data.length;i++){
        list.push(<Product data={data[i]} mode= "admin"/>)
      }

        return(
            <div className="container ">
              {list}
            </div>
        )
    }
}

export default ProductList;

// class Products{
//   constructor(){
//   this.photo= faker.image.technics();
//   this.name= faker.commerce.productName();
//   this.price={
//     amount:faker.commerce.price(),
//     currency:"USD"
//       };
//   this.rating= 4.5;
//   this.promo= true;
//   }
// }