import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Product=({product,update})=>{

  
  const deleteproduct=(id)=>{
    axios.delete(`${base_url}/Products/${id}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("product  deleted");
        update(id);
      },)
       .catch((error)=>{
        console.error(error);
        toast.error("product deleted");
      });
  }
  
  //form handler function
  const handleForm=(e)=>{
    console.log(product);
    postDatatoServer(product);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/Product`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Product deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">ID       : {product.id}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Name     :{product.productname}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Price    : {product.price}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Quantity : {product.productQuantity}</CardSubtitle>
          
          <CardText>{product.description}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteproduct(product.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-product">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Product;