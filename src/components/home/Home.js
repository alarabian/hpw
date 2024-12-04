"use client";
import React, { useEffect } from "react";
import HotelComp from "./hotel-comp/HotelComp";
import FlightComp from "./flight-comp/FlightComp";
import BusComp from "./bus-comp/BusComp";

import { FaBus, FaHotel } from "react-icons/fa6";
import { MdOutlineFlight } from "react-icons/md";
import HotelBook from "./hotel-hotel/HotelBook";

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section className="coverSec">
        <div className="container-fluid">
          <div className="travelBooking">
            <ul className="nav nav-tabs" id="travelTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="hotel-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#hotel-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="hotel-tab-pane"
                  aria-selected="false"
                >
                  <FaHotel /> Hotel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="flight-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#flight-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="flight-tab-pane"
                  aria-selected="true"
                >
                  <MdOutlineFlight /> Flight
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="bus-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bus-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="bus-tab-pane"
                  aria-selected="false"
                >
                  <FaBus /> Bus
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="hotel-tab-pane"
                role="tabpanel"
                aria-labelledby="hotel-tab"
                tabIndex={0}
              >
                <HotelComp />
              </div>
              <div
                className="tab-pane fade "
                id="flight-tab-pane"
                role="tabpanel"
                aria-labelledby="flight-tab"
                tabIndex={0}
              >
                <FlightComp />
              </div>
              <div
                className="tab-pane fade "
                id="bus-tab-pane"
                role="tabpanel"
                aria-labelledby="bus-tab"
                tabIndex={0}
              >
                <BusComp />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HotelBook />
      
      <section
      className="bgCover sectionSpace"
        style={{
          backgroundImage: `url(${"/assets/images/book/banner_bg.jpg"})`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="duoText">
                <h2>A Truly Wonderful Experience</h2>
                <p>
                  Brilliant for anyone looking to get away from the hustle and
                  bustle of city life or detox from their tech for a few days. I
                  could have stayed another week!
                </p>
                <p>
                  They really have thought about everything here down to the
                  finest details.
                </p>
                <div className="rating">
                01 Jan 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
