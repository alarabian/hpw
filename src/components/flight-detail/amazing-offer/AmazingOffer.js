import React from "react";
import { BiSolidOffer } from "react-icons/bi";

const AmazingOffer = () => {
  return (
    <>
      <div className="lowPrice m-0 p-3">
        <div className="icon">
          <BiSolidOffer />
        </div>
        <div className="text">
          <p>
            Log in to access <strong>amazing offers & redeem hpw money </strong>{" "}
            on your flight booking.
          </p>
        </div>
      </div>
    </>
  );
};

export default AmazingOffer;
