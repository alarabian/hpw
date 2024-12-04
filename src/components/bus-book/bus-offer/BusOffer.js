import React from "react";

const BusOffer = () => {
  return (
    <>
      <div className="busOffer boxCard border-0">
        <h4>Offers </h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <strong>ICICI200</strong>
            <p>Flat Rs.200off with ICICI Bank Credit Card</p>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <strong>DILJEET</strong>
            <p>Win free tickets to the Diljit Dosanjh concert!</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default BusOffer;
