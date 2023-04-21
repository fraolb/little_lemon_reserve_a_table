import React from "react";
import "./aboutUs.css";
import Pic from "./images/Mario and Adrian A.jpg";
import Header from "./components/header";
import Footer from "./components/footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="aboutUs">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <section>
          Welcome to Little Lemon, a family-owned Mediterranean restaurant where
          we serve traditional recipes with a modern twist. Our dishes are
          crafted with care and love, using only the freshest ingredients to
          bring you the authentic taste of the Mediterranean. From classic
          favorites to exciting new creations, our menu is sure to satisfy your
          cravings. Whether you're joining us for a quick lunch or a leisurely
          dinner, our warm and welcoming atmosphere will make you feel right at
          home. Come experience the flavors of Little Lemon and let us transport
          you to the sunny shores of the Mediterranean.
        </section>
        <div className="imgContainer">
          <img src={Pic} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
