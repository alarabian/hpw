import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdSwapHorizontalCircle } from "react-icons/md";

const FlightForm = () => {
  return (
    <>
      <div className="trip">
        <ul>
          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">One-way</label>
            </div>
          </li>
          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Round-trip</label>
            </div>
          </li>
          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Multi-city</label>
            </div>
          </li>
        </ul>
      </div>
      <form className="hotelForm HotelForm">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" className="form-control" placeholder="From" />
          {/* <MdSwapHorizontalCircle /> */}
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>

          <input type="text" className="form-control" placeholder="To" />
        </div>
        <div className="form-group">
          <label htmlFor="Depart">Depart</label>

          <input type="date" className="form-control" placeholder="Depart" />
        </div>
        <div className="form-group">
          <label htmlFor="return">Return</label>
          <input type="date" className="form-control" placeholder="Return" />
        </div>
        <div className="form-group">
          <label htmlFor="travel">Travel & cabin class</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adult, Economy"
          />
        </div>
        <div className="form-group">
          <a href="/flight-list" className="btn searchHotel">
            {" "}
            <BiSearch /> Search Flight
          </a>
        </div>
      </form>
      <div className="specialFare">
        <p>Special Fare</p>
        <ul>
          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Deference Forces
              </label>
            </div>
          </li>
          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Student
              </label>
            </div>
          </li>

          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Senior Citizen
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FlightForm;
