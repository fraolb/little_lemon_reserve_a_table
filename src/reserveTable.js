import React, { useState } from "react";
import "./reserveTable.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Pic from "./images/restauranfood.jpg";
import CreditCard from "./images/creditcard.svg";

const ReserveTable = () => {
  const [val, setVal] = useState(1);
  const [data, setDate] = useState({
    date: "",
    time: "",
    no_of_diner: "",
    occasion: "",
    option: "",
  });
  const [card, setCard] = useState({
    card_number: "",
    full_name: "",
    exp_date: "",
    cvv: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDate({ ...data, [name]: value });
    console.log(data);
  };
  const handleCardChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCard({ ...card, [name]: value });
    console.log(card);
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (data.date && data.time && data.no_of_diner) {
      setVal(2);
    }
  };
  const handleCardSubmit = (e) => {
    e.preventDefault();
    setVal(3)
    console.log(card)
  };

  return (
    <div className="reserveTable">
      <Header />
      <div className="reserveTableBody">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <h4>Find a table for any occasion</h4>

        <div className="reserveTableImgContainer">
          <img src={Pic} className="reserveTableImg" />
          <img src={Pic} className="reserveTableImg" />
        </div>
        {val == 1 ? (
          <div>
            <form className="reserverForm">
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="formInputDate"
              />
              <select name="time" onChange={handleChange} className="formInput">
                <option value="">Time</option>
                <option value="17pm">17pm</option>
                <option value="18pm">18pm</option>
                <option value="19pm">19pm</option>
                <option value="20pm">20pm</option>
                <option value="21pm">21pm</option>
                <option value="22pm">22pm</option>
              </select>
              <select
                name="no_of_diner"
                onChange={handleChange}
                className="formInput"
              >
                <option value="">Number of diners</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10 to 15">10 to 15</option>
              </select>
              <select
                name="occasion"
                onChange={handleChange}
                className="formInput"
              >
                <option value="">Occasion</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
                <option value="Date">Date</option>
              </select>
              <div className="formRadio">
                <div className="formRadioTitle">Seating Options</div>
                <div>
                  <input
                    type="radio"
                    id="standard"
                    name="option"
                    value="standard"
                    onChange={handleChange}
                  />
                  <label htmlFor="standard" style={{ marginLeft: "20px" }}>
                    Standard
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="outside"
                    name="option"
                    value="outside"
                    onChange={handleChange}
                  />
                  <label htmlFor="outside" style={{ marginLeft: "20px" }}>
                    Out Side
                  </label>
                </div>
              </div>
              <div style={{ color: "#495E57" }} className="hiddenDot">
                .
              </div>
              <button onClick={handleSubmitData}>Lets Go</button>
            </form>
          </div>
        ) : val == 2? (
          <div className="reserveTablePayment">
            <h4>Booking Details</h4>
            <div className="paymentDescription">
              {data.date} - Time {data.time} - {data.no_of_diner} People
            </div>
            <h4>Credit Card Details</h4>
            <form className="cardForm">
              <div style={{ display: "grid" }}>
                <input
                  name="card_number"
                  type="number"
                  placeholder="Card Number"
                  className="cardInput"
                  required
                  max={16}
                  min={16}
                  value={card.card_number}
                  onChange={handleCardChange}
                />
                {card.card_number =='' &&<span>Card Number is required *</span>}
              </div>
              <div style={{ display: "grid" }}>
                <input
                  name="full_name"
                  type="name"
                  placeholder="Full Name"
                  className="cardInput"
                  required
                  value={card.full_name}
                  onChange={handleCardChange}
                />
                {card.card_number == "" && <span>Full Name is required *</span>}
              </div>

              <div className="cardDateCVV">
                <div className="containerCard">
                  <div>Exp. Date</div>
                  <input
                    name="exp_date"
                    type="date"
                    className="cardInputDate"
                    required
                    value={card.exp_date}
                    onChange={handleCardChange}
                  />
                </div>
                <div className="containerCard">
                  <div>CVV</div>
                  <input
                    name="cvv"
                    type="number"
                    placeholder="CVV"
                    className="cardCVV"
                    required
                    value={card.cvv}
                    onChange={handleCardChange}
                  />
                </div>

                <div className="cardIconContainer">
                  <img src={CreditCard} className="cardIcon" />
                </div>
              </div>
              <div style={{ display: "grid" }}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="cardInput"
                  required
                  value={card.email}
                  onChange={handleCardChange}
                />
                {card.email == "" && <span>Email is required *</span>}
              </div>
              <div style={{ display: "grid" }}>
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  className="cardInput"
                  required
                  value={card.phone}
                  onChange={handleCardChange}
                />
                {card.phone == "" && <span>Phone Number is required *</span>}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label htmlFor="html">
                  Send me booking confirmation via text
                </label>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label htmlFor="css">
                  Send me booking confirmation via email
                </label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
              </div>
              <button onClick={handleCardSubmit}>Book</button>
            </form>
          </div>
        ):<h4>You have booked a table!</h4>}
      </div>

      <Footer />
    </div>
  );
};

export default ReserveTable;
