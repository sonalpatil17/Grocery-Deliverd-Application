import React, { useState,useEffect } from "react";
import Product from "./Product";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { List } from "reactstrap";
import Hero4 from "./Hero4";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


const Allproduct=() => {

    useEffect(() => {
            document.title="All Product ";
    });

    //Function to call servers
    const getAllproductFromServer=()=>{
        axios.get(`${base_url}/Products`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Product has been loaded",{position:"bottom-center"});
                setproduct(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllproductFromServer();
        },[]);

    const [product,setproduct]=useState([]);

    const Updateproduct=(id)=>{
        setproduct(product.filter((c)=>c.id!=id));
    };

    
    return(
        <div>
         <Hero4 hero4="roomsHero4">

            
                {product.length > 0 
                  ?product.map((item) => <Product key={item.id} product={item}/>) 
                  :"No product"}
          </Hero4>
          <Link to="/" ><Button>Home </Button> </Link>

                </div>
    );
};

export default Allproduct;