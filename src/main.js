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

const foodMenu = [
  {
    img: Food1,
    name: "Greek Salad",
    price: 12.99,
    content:"The famous greek salad of crispy lettuce, peppers, olivers and our chicago spices."
  },
  {
    img: Food2,
    name: "Bruchetta",
    price: 7.99,
    content:"Our Bruschetta is made from grilled bread that has been smeared with garlic."
  },
  {
    img: Food3,
    name: "Lemon Dessert",
    price: 3.99,
    content:"The famous dessert with a flavour of lemon, very sweet."
  },
]
const testimonial =[
  {
    name:"Jhon Doe",
    text:"Little Lemon is one of the best places for a data, and they have the best cheffs"
  },
  {
    name:"Lukas D.",
    text:"I have been in many restaurants, but none of them compare with little lemon, keep up guys!"
  },
  {
    name:"Elsa Moor",
    text:"Little Lemon is my favorite spot to hung out with my friends."
  },
  {
    name:"Dave P.",
    text:"If you ever been to Little Lemon, try the greek salad, that is soo addictive food. Love it!"
  },
]

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
          {
            foodMenu.map((i)=>(<FoodCard data={i} />))
          }
          
        </div>
      </div>
      <div className="testimonial">
        <h3>Testimonials</h3>
        <div className="testimonialBody">
          {
            testimonial.map((i)=>(<TestimonialCard data={i} />))
          }
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
