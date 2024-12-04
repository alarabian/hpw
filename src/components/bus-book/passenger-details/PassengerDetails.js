import React from "react";
import { PiWhatsappLogo } from "react-icons/pi";

const PassengerDetails = () => {
  return (
    <>
      <div className="passengerDetails boxCard">
        <h4>Passenger Details</h4>
        <div className="PassengerCard">
          <h6>Add Passenger for : DL6</h6>
          <form className="form">
            <input type="text" className="form-control" placeholder="Name" />
            <input
              type="number"
              className="form-control w-25"
              placeholder="Age"
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
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
                Female
              </label>
            </div>
          </form>
         
        </div>
        <div className="PassengerCard">
          <h6>Add Passenger for : DU8</h6>
          <form className="form">
            <input type="text" className="form-control" placeholder="Name" />
            <input
              type="number"
              className="form-control w-25"
              placeholder="Age"
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
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
                Female
              </label>
            </div>
          </form>
         
        </div>
         <div className="tripContact">
            <h5>Contact Details</h5>
            <p>Get bus updates and ticket details via WhatsApp and Email.</p>
            <ul>
              <li>
                Phone Number <span>9718292793</span>
              </li>
              <li>
                Email <span>shadabmohammad011@gmail.com</span>
              </li>
              <li className="whats">
                <PiWhatsappLogo />
                WhatsApp
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default PassengerDetails;
