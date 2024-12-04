import Image from "next/image";
import React from "react";

const FlightItem = () => {
  return (
    <>
      <div className="flightDurationCard">
        <div className="flightDuration">
          <div className="logo">
            <Image
              alt="vistara"
              loading="lazy"
              width={80}
              height={80}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/assets/images/vistara.png"
            />
          </div>
          <div className="duration">
            <div className="time">
              <span>JAI</span>
              <h5>21:30</h5>
              <p>Fri, 12 Jan Jaipur</p>
            </div>
            <div className="distance">
              <span>4hr 5 min</span>
              <hr />
              <span>non stop</span>
            </div>
            <div className="time">
              <span>GOI</span>
              <h5>21:30</h5>
              <p>Fri, 12 Jan Goa</p>
            </div>
          </div>
        </div>
        <div className="flightPrice">
          <p>₹8,640</p>
          <a className="btn" href="/flight-detail">
            BOOK
          </a>
        </div>
      </div>
    </>
  );
};

export default FlightItem;
