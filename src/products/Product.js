import React, { Component } from 'react';
import faker from 'faker';
import {Dropdown, Image} from 'react-bootstrap'
import Rating from 'react-rating'

class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: props.data,   // datele produsului
            mode: props.mode   // regimul de afisare
            // vor exista moduri: compact , preview, full

        }
    }



    render(){
        let data = this.state.data;
        let mode = this.state.mode;
        let dom =   <div className = "product">
                    <img src={data.photo} alt = ""/>
                    <h2>{data.name}</h2>
                    <p> {data.price.amount} </p>                    
                    </div>
        switch(mode){
            case "compact": 
            dom =   <div className = "product">
                    <img src={data.photo} width="100" alt = ""/>
                    <h2>{data.name}</h2>
                    <p> {data.price.amount} </p>
                    </div>
            break;
            case "preview": 
            dom =   <div className = "product">
                    <img src={data.photo} width="300" alt = ""/>
                    <h2>{data.name}</h2>
                    <p> {data.price.amount} </p>
                    </div>
            break;
            case "full": 
            dom =   <div className = "product">
                    <img src={data.photo} width="300" alt = ""/>
                    <h2>{data.name}</h2>
                    <p> {data.price.amount} </p>
                    </div>
            break;
            case "admin": 
            dom =   <div className = "product row">
                    <div className="col-1">
                    <Image src={data.photo} fluid />
                    </div>
                    <h2 class="col-5">{data.name}</h2>
                    <p class="col-2"> {data.price.amount} </p>
                    <p class="col-2"><Rating start="0" stop={data.rating} readonly="true"/>{data.rating}</p>
                    <Dropdown class="col-2">
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Publish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
            break;
            default: break;
            
        }


        return(          
           dom
        )
    }
}


export default Product;


// optimize JSX