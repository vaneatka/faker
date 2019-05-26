import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductForm from './products/ProductForm'
import ProductList from './products/ProductList'
import {Navbar, Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/product/add" component={ProductForm}/>
        <Route path="/products"  component={ProductList}/>

        <Navbar className="container mb-5" fixed="bottom">
        <Link to="/products" className="mr-auto">
        <Button variant="secondary" size ="lg" className="shadow">
        Products
        </Button>
        </Link>
        <Link to="/product/add" className="ml-auto">
        <Button variant="primary" size ="lg" className="rounded-pill shadow">
        +
        </Button>
        </Link>
        </Navbar>
      </Router>

    </div>
  );
}

export default App;
