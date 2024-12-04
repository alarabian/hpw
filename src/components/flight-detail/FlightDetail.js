import React from "react";
import PaymentProcess from "./payment-process/PaymentProcess";
import FareSummary from "./fare-summary/FareSummary";
import AmazingOffer from "./amazing-offer/AmazingOffer";
import FlightFullDetail from "./flight-full-detail/FlightFullDetail";
import TravelCancel from "./travel-cancel/TravelCancel";
import FinalPrice from "./final-price/FinalPrice";

const FlightDetail = () => {
  return (
    <>
      <div className="flightDetail sectionSpace bgGray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="fareCard">
                <AmazingOffer />
                <FareSummary />
              </div>
              <PaymentProcess />
            </div>
            <div className="col-lg-8">
              <FlightFullDetail />
              <TravelCancel />
              <FinalPrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
