import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import YourTrip from "./your-trip/YourTrip";
import SignBook from "./sign-book/SignBook";
import SocialConnect from "./social-connect/SocialConnect";
import ShortBookDetail from "./bhort-book-detail/ShortBookDetail";

const HotelBook = () => {
  return (
    <>
      <section className="hotelBook sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pageTitle mb-4">
                <h2>Confirm and pay</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lowPrice mt-0">
                <div className="icon">
                  <IoPricetagOutline />
                </div>
                <div className="text">
                  <h6>Lower price</h6>
                  <p>
                    Your dates are ₹8,213 less than the avg. nightly rate of the
                    last 60 days.
                  </p>
                </div>
              </div>
              <YourTrip />
              <SignBook />
              <div className="divSee">
                <span>OR</span>
              </div>
              <SocialConnect />
            </div>
            <div className="col-lg-6">
              <ShortBookDetail />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelBook;
