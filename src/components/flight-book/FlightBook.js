import React from "react";
import OffersForYou from "./offers-for-you/OffersForYou";
import TravelerDetails from "./traveler-details/TravelerDetails";
import ContactDetails from "./contact-details/ContactDetails";
import FareSummary from "../flight-detail/fare-summary/FareSummary";
import Link from "next/link";

const FlightBook = () => {
  return (
    <>
      <div className="flightBook sectionSpace bgGray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <OffersForYou />
              <div className="fareCard mt-4">
                <FareSummary />
              </div>
            </div>
            <div className="col-lg-8">
              <TravelerDetails />
              <ContactDetails />
              <div class="finalPrice">
                <h5>₹19,535</h5>
                <Link href={"/flight-book"} class="loadMoreButton bg-success">Save traveler</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBook;
