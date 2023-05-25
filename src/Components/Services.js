import React, { Component } from "react";
import { FaRupeeSign, FaTruck,FaHourglassHalf } from "react-icons/fa";
import Title from "../Components/Title";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

 class Services extends Component {
  state = {
    services: [
      {
        icon: <FaTruck />,
        title: "Free Delivery",
        info:
          "Free Delivery on your first Order."
      },
      {
        icon: <FaRupeeSign />,
        title: "Refund",
        info:
        "Guarantee to Refund your money,if you'r are not delighted with your purchase. "
      },
      {
        icon: < FaHourglassHalf/>,
        title: "24/7",
        info:
        "Offers You 24/7 Service."
      },
    ]
  };

  render() {
    return (
      <section className="Services">
        <Title title="Services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="Grocery Services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
          <Link to="/" ><Button>HOME </Button> </Link>
        </div>
      </section>
    );
  }
}
export default Services;