import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./main.css";
import Pic from "./images/restauranfood.jpg";
import Header from "./components/header";
import FoodCard from "./components/foodCard";
import TestimonialCard from "./components/testimonialCard";
import Footer from "./components/footer";

import Food1 from './images/greek salad.jpg'
import Food2 from './images/bruchetta.svg'
import Food3 from './images/lemon dessert.jpg'

const Main = () => {
  useEffect(()=>{
    // const date = new Date();
    // const availableTimes = fetchAPI(date);
    // console.log(availableTimes);
    // fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  })
  return (
    <div className="main">
      <Header />
      <div className="mainHero">
        <div className="mainHeroLeft">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            
            We are a family owned Mediterranean restaurant. <br />{" "}
            focused on traditional 
            recipes served with a modern <br /> twist.
          </p>
          <Link to="/reserveTable">
            <button>Reserve a Table</button>
          </Link>
        </div>
        <div className="mainHeroRight">
          <img src={Pic} />
        </div>
      </div>
      <div className="specials">
        <div className="specialsTitle">
          <h3>This weeks specials!</h3>
          <button>Online Menu</button>
        </div>
        <div className="specialsBody">
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <div className="testimonial">
        <h3>Testimonials</h3>
        <div className="testimonialBody">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      <div className="aboutHotel">
        <div className="aboutHotelLeft">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned  Mediterranean restaurant. <br />{" "}
            focused on traditional 
            recipes served with a modern <br /> twist.
          </p>
        </div>
        <div className="aboutHotelRight">
          <img src={Pic} className="aboutHotelImg1" />
          <img src={Pic} className="aboutHotelImg2" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
