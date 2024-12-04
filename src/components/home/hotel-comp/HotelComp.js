import React from "react";
import HotelForm from "./hotel-form/HotelForm";

const HotelComp = () => {
  return (
    <>
      <div className="hotelComp">
        <div className="title">
          <h3>Where as best booking system with special discounts & perks</h3>
          <p>
            A booking is a system for travels in the form odf service. A vibe
            and explore the top destination in words
          </p>
        </div>
        <HotelForm />
      </div>
    </>
  );
};

export default HotelComp;
