import React from "react";

const YourTrip = () => {
  return (
    <>
      <div className="yourTrip">
        <h4>Your trip</h4>
        <div className="tripCard">
          <div className="tripItem">
            <div className="date">
              <h5>Dates</h5>
              <span>17–22 Nov</span>
            </div>
            <div className="edit">
              <span>Edit</span>
            </div>
          </div>
          <div className="tripItem">
            <div className="date">
              <h5>Guests</h5>
              <span>1 guest </span>
            </div>
            <div className="edit">
              <span>Edit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourTrip;
