import React from "react";
import BusFareDetail from "./bus-fare-detail/BusFareDetail";
import BusOffer from "./bus-offer/BusOffer";
import GetPromo from "./get-promo/GetPromo";
import TripDetail from "./trip-detail/TripDetail";
import PassengerDetails from "./passenger-details/PassengerDetails";
import Benefit from "./benefit/Benefit";
import Insurance from "./insurance/Insurance";
import BillingAddress from "./billing-address/BillingAddress";

const BusBook = () => {
  return (
    <>
      <section className="busBookPage sectionSpace bgGray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
                <TripDetail />
                <PassengerDetails />
                <Benefit />
                <Insurance />
                <BillingAddress />
            </div>
            <div className="col-lg-4">
              <div className="busFareDetailCard">
                <BusFareDetail />
                <BusOffer />
                <GetPromo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusBook;
