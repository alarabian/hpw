import React from "react";
import HotelDesc from "./hotel-desc/HotelDesc";
import BookStatus from "./book-status/BookStatus";
import BedroomSlider from "./bedroom-slider/BedroomSlider";
import PlaceOffer from "./place-offer/PlaceOffer";
import FeatureSlider from "./features-slider/FeaturesSlider";
import GuestFavorite from "./guest-favorite/GuestFavorite";
import CustomerView from "./customer-view/CustomerView";
import HotelMap from "./hotel-map/HotelMap";

const thingsToKnow = [
  {
    id: 1,
    category: "House Rules",
    details: [
      "Check-in after 3:00 pm",
      "Checkout before 12:00 pm",
      "Pets allowed",
    ],
  },
  {
    id: 2,
    category: "Safety & Property",
    details: [
      "No carbon monoxide alarm",
      "No smoke alarm",
      "Pool/hot tub without a gate or lock",
    ],
  },
  {
    id: 3,
    category: "Cancellation Policy",
    details: [
      "This reservation is non-refundable",
      "Review this Host’s full policy for details",
    ],
  },
];

const HotelInfo = () => {
  return (
    <>
      <div className="hotelInfo">
        <div className="row">
          <div className="col-lg-7">
            <div className="HotelInfoPart">
              <HotelDesc />
              <BedroomSlider />
              <PlaceOffer />
              <FeatureSlider />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="p-4">
              <BookStatus />
            </div>
          </div>
          <div className="col-lg-12">
            <GuestFavorite />
            <CustomerView />
            <HotelMap />
            <div className="things">
              <h4>Things to know</h4>
              <div className="thingsKnow">
                {thingsToKnow.map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <h6>{item.category}</h6>
                      <ul>
                        {item.details.map((name, i) => {
                          return <li key={i}>{name}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="showAll">Show All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelInfo;
