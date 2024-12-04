import React from "react";

const FlightFilter = () => {
  return (
    <>
      <div className="pageFilter">
        <div className="title">
          <h3>Filter</h3>
        </div>
        <div className="pageFilterItem hotelItem  departure">
          <h5>departure</h5>
          <ul>
            <li>before 6AM</li>
            <li>6AM - 12PM</li>
            <li>12PM - 6PM</li>
            <li>after 6PM</li>
          </ul>
        </div>
        <div className="pageFilterItem hotelItem  onePrice">
          <h5>one way price</h5>
          <input type="range" className="form-range" id="customRange1" />
        </div>
        <div className="pageFilterItem hotelItem  flightStops">
          <h5>stops</h5>
          <ul>
            <li>Direct</li>
            <li>1 Stop</li>
            <li>2+ Stops</li>
          </ul>
        </div>
        <div className="pageFilterItem airlines hotelItem property">
          <h5>airlines</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Air India
              </label>
            </div>
            <div className="number">
              <span>₹17,789</span>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Air India Express
              </label>
            </div>
            <div className="number">
              <span>₹17,789</span>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Akasa Air
              </label>
            </div>
            <div className="number">
              <span>₹17,789</span>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Alliance Air
              </label>
            </div>
            <div className="number">
              <span>₹17,789</span>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Indigo
              </label>
            </div>
            <div className="number">
              <span>₹17,789</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightFilter;
