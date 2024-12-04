import React from "react";

import { BiSearch } from "react-icons/bi";

const HotelForm = () => {
  return (
    <>
      <form className="hotelForm">
        <div className="form-group">
          <select className="form-select name">
            <option value="Enter city, hotel, locality & landmark">
              Enter city, hotel, locality & landmark
            </option>
          </select>
        </div>

        <div className="form-group">
          <select className="form-select">
            <option value="Check in & Check out">Check in & Check out</option>
          </select>
        </div>

        <div className="form-group">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Room
            </button>
            <div className="dropdown-menu adultPart">
              <h6>Room 1</h6>
              <ul>
                <li>
                  <div className="name">
                    <h5>Adults</h5>
                    <p>12+ years</p>
                  </div>
                  <div className="numberAdd">
                    <button className="btn">-</button>
                    <span>2</span>
                    <button className="btn">+</button>
                  </div>
                </li>

                <li>
                  <div className="name">
                    <h5>Children</h5>
                    <p>1-11 years</p>
                  </div>
                  <div className="numberAdd">
                    <button className="btn">-</button>
                    <span>0</span>
                    <button className="btn">+</button>
                  </div>
                </li>
              </ul>
              <p className="addRoom">Add another room </p>
            </div>
          </div>
        </div>

        <div className="form-group">
          <a href="/hotel-list" className="btn searchHotel">
            {" "}
            <BiSearch /> Search Hotels
          </a>
        </div>
      </form>
    </>
  );
};

export default HotelForm;
