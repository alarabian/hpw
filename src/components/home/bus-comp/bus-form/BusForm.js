import React from "react";
import { BiSearch } from "react-icons/bi";

const BusForm = () => {
  return (
    <>
      <form className="hotelForm busForm">
        <div className="form-group fromCom">
          <input type="text" className="form-control" placeholder="From" />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="To" />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Travel Date"
          />
        </div>

        <div className="form-group">
          <a href="/bus-list" className="btn searchHotel">
            {" "}
            <BiSearch /> Search Bus
          </a>
        </div>
      </form>
    </>
  );
};

export default BusForm;
