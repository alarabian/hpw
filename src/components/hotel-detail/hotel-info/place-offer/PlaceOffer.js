import React from "react";
const farmStayOffers = {
  id: "anandaBaghFarmOffers",
  offers: [
    "Garden view",
    "Mountain view",
    "Kitchen",
    "Wifi – 36 Mbps",
    "Dedicated workspace",
    "Free driveway parking on premises – 15 spaces",
    "Private outdoor pool – available all year, open 24 hours, lap pool, saltwater",
    "Pets allowed",
  ],
  unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
};

const PlaceOffer = () => {
  return (
    <>
      <div className="placeOffer">
        <div className="title">
          <h4>What this place offers</h4>
        </div>
        <ul className="offer">
          {farmStayOffers.offers.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <ul className="unavailable">
          {farmStayOffers.unavailable.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <button className="showAll">Show all 54 Amenities</button>
      </div>
    </>
  );
};

export default PlaceOffer;
