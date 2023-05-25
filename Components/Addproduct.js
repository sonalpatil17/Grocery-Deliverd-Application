import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Hero1 from "./Hero1";


const Addproduct=()=>{
    useEffect(()=>{
        document.title="ADD product";
    },[]);

    const [product,setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/Products`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Product Information added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <>
        <div>
            <Hero1 hero1="roomsHero1">
        <Fragment>
        
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="id">Product Id</label>
                <Input
                        Type="text"
                        placeholder="Enter productId here"
                        name="id"
                        Id="id"
                        onChange={(e)=>{
                            setproduct({...product,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="productname">Product Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Name here"
                        name="productname"
                        Id="productname"
                        onChange={(e)=>{
                            setproduct({...product,productname:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="productQuantity">Product Quantity</label>
                <Input
                        Type="text"
                        placeholder="Enter product Quantity here "
                        name="productQuantity"
                        Id="productQuantity"
                        onChange={(e)=>{
                            setproduct({...product,productQuantity:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="price">Price</label>
                <Input
                        Type="text"
                        placeholder="Enter price here "
                        Id="price"
                        onChange={(e)=>{
                            setproduct({...product,price:e.target.value});
                        }}
                />
                </FormGroup>

                
                <Container className="text-center">
                    <Button type="submit" color="success">Add Product</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>{' '}
                    <Link to="/" ><Button>HOME </Button> </Link>
                </Container>
            
        </Form>
        </Fragment>
        </Hero1>
        </div>
        </>
        

    );
};
export default Addproduct;