import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import Pic from "./images/restauranfood.jpg";
import Header from "./components/header";
import FoodCard from "./components/foodCard";
import TestimonialCard from "./components/testimonialCard";
import Footer from "./components/footer";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="mainHero">
        <div className="mainHeroLeft">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned <br /> Mediterranean restaurant. <br />{" "}
            focused on traditional <br />
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
            We are a family owned <br /> Mediterranean restaurant. <br />{" "}
            focused on traditional <br />
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
