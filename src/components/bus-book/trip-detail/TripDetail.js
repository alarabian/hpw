import React from "react";

const TripDetail = () => {
  return (
    <>
      <div className="tripDetail boxCard">
        <h4>Trip Details</h4>
        <ul>
          <li>
            <span>Bus Partner</span>
            <strong>Yolo Bus</strong>
          </li>
          <li>
            <span>Seat No</span>
            <strong>DL6,DU8</strong>
          </li>
          <li>
            <span>Bus Type</span>
            <strong>Bharat Benz AC Sleeper (2 + 1)</strong>
          </li>
        </ul>

        <div className="flightDuration">
          <div className="duration">
            <div className="time">
              <p>Boarding</p>
              <h5>16 Nov 2024, 21:16 </h5>
              <p>Aramghar</p>
            </div>
            <div className="distance">
              <span>12:10 Hrs</span>
              <hr />
            </div>
            <div className="time">
              <p>Dropping</p>
              <h5>17 Nov 2024, 07:24</h5>
              <p>Tin Factory</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripDetail;
