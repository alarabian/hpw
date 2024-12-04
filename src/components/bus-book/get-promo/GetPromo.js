import React from "react";
import { BiSolidOffer } from "react-icons/bi";

const GetPromo = () => {
  return (
    <>
      <div className="getPromo boxCard">
        <div className="icon">
          <BiSolidOffer />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter Code"
            className="form-control"
          />
        </div>
      </div>
    </>
  );
};

export default GetPromo;
