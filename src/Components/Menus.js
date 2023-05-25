import React from "react";
import { Button,Container,Navbar,Row,col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Card} from "reactstrap";

import Hero from "./Hero";
import Banner from "./Banner";
import { ListGroup,ListGroupItem } from "reactstrap";
const Menus=()=>{
    return(
        <>
        <div>
        <Card className="my-2 bg-info"></Card>
        <Hero hero="roomsHero">
           <Banner title="OUR MENUS">
             <Link to="/" className="btn-primary">
                return home
             </Link>
             <p>
             <ListGroup>
            <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-product">Add Product</ListGroupItem>
            <ListGroupItem tag="a" href="/all-product">View All ProductS</ListGroupItem>
            <ListGroupItem tag="a" href="/update-product">Update Product</ListGroupItem>
            <ListGroupItem tag="a" href="/Services">Services</ListGroupItem>
            <ListGroupItem tag="a" href="/ContactUs">ContactUs</ListGroupItem>
            </ListGroup>
            </p>
            </Banner>
         </Hero>
         </div>
        </>
    );
}
 export default Menus;