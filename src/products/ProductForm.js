import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


class ProductForm extends Component{
    constructor(){
        super()
        this.state={
            validated: false
        }
    }

    handleSubmit(event){
        event.preventDefault(); // nu permitem sa faca refresh
        alert();
    }


    render(){
        return(
            <div id = 'product-form'>
                <Form className="container" onSubmit={e=> this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Control type ="text" placeholder = "Product Name" size="lg"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type ="text" placeholder = "Product Name" size="lg"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type ="text" placeholder = "Product Name" size="lg"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type ="text" placeholder = "Product Name" size="lg"/>
                    </Form.Group>
                    <Button type="submit" variant="warning">Save</Button>
                </Form>
            </div>
        )
    }
}

export default ProductForm;