import React from "react";
import FlightComp from "../home/flight-comp/FlightComp";
import FlightPriceOption from "./flight-price-option/FlightPriceOption";
import FlightItem from "./flight-item/FlightItem";
import FlightFilter from "./flight-filter/FlightFilter";
import Image from "next/image";

const FlightList = () => {
  return (
    <>
      <div className="flightList sectionSpace">
        <div className="container-fluid">
          <FlightComp />
        </div>
      </div>
      <div className="flightListCard sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <FlightFilter />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <FlightPriceOption />
                </div>
                <div className="col-lg-10">
                  <FlightItem />
                  <FlightItem />
                  <FlightItem />
                  <FlightItem />
                  <FlightItem />
                </div>
                <div className="col-md-2">
                  <div className="addOffer">
                    <Image
                      src="/assets/images/hotel/room-1.PNG"
                      width={200}
                      height={200}
                      alt="Ad."
                      className="img-fluid"
                    />
                    <Image
                      src="/assets/images/hotel/room-2.JPG"
                      width={200}
                      height={200}
                      alt="Ad."
                      className="img-fluid"
                    />
                    <Image
                      src="/assets/images/hotel/room-4.PNG"
                      width={200}
                      height={200}
                      alt="Ad."
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightList;
