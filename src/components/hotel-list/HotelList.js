import React from "react";
import HotelListItem from "./hotel-list-item/HotelListItem";
import { FaFilter } from "react-icons/fa";
import HotelListFilter from "./hotel-list-filter/HotelListFilter";

const HotelList = () => {
  return (
    <>
      <div className="hotelList sectionSpace">
        <div className="container">
          <div className="shareHeader">
            <h3>Hotel List</h3>
            <div
              className="share filter"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <ul>
                <li>
                  <FaFilter />
                  <span>Filter</span>
                </li>
              </ul>
            </div>
          </div>
          <HotelListItem />
          <HotelListFilter />
        </div>
      </div>
    </>
  );
};

export default HotelList;
