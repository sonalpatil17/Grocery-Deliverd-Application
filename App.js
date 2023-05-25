//import {Button,Container,Nav,Row,col} from 'reactstrap';
import { ToastContainer, toast} from 'react-toastify';
import React from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Addproduct from './Components/Addproduct';
import Menus  from './Components/Menus';
import Product from './Components/Product';
import Updateproduct from './Components/Updateproduct';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs'
import Allproduct from './Components/Allproduct';
//import Hero from './Components/Hero';
//import Banner from './Components/Banner';


function App(){
  const btnHandle=()=>{
    toast.success("done",{
    position:"top-center",
  });   
  };
  return ( 
    <>
    <ToastContainer/>
    <switch>
    
          
    <ToastContainer/>
            <Router>
              <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/add-product" element={<Addproduct/>} exact/>
              <Route path="/all-product" element={<Allproduct/>} exact/>            
              <Route path="/update-product" element={<Updateproduct/>} exact/>
              <Route path="/Services" element={<Services/>} exact/>
              <Route path="/ContactUs" element={<ContactUs/>} exact/> 
              <Route path="/Menus" element={<Menus/>} exact/>
 
                       
              </Routes>
            </Router>
            </switch>
            </>
          
         
  );
}
export default App;
