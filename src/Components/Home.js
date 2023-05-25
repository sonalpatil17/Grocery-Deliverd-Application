import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import css from"./Home.module.css";
import{Container,Button,Card,CardTitle,CardBody} from "reactstrap";
import React,{useEffect} from "react";
import Menus from "./Menus";
import Hero from "./Hero";
const Home=()=>{
    useEffect(()=>{
        document.title = "hotel app";
},[]);
    return(
    <React.Fragment>
        <Hero>
         <Banner
          title="BigBasket"
          subtitle="grocery shops welcome you"
           >
          <Link to="/Menus" className="btn-primary">
            MENU
          </Link>
         </Banner>
        </Hero>
        </React.Fragment>
    );
};
export default Home;